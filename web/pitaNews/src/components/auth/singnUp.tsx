import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '../../Authotication/firebase';
import { doc, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

interface SignupFormProps {
  onSignupSuccess: () => void; // Pass success callback as prop
  onSignupBack: () => void; // Pass success callback as prop
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignupSuccess, onSignupBack }) => {
  const [username, setUsername] = useState('');
  const [AR_Number, setAR_Number] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords don't match",
        text: "Please enter the same password in both fields.",
        icon: "error",
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user info in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        AR_Number: AR_Number,
        email: email,
        role: 'user',
      });

      await sendEmailVerification(auth.currentUser!);

      Swal.fire({
        title: "Success",
        text: "Registration successful. Please check your email for verification.",
        icon: "success",  
      });

      onSignupSuccess(); // Trigger success callback
    } catch (error: any) {
      handleFirebaseError(error.code);
    }
  };

  const handleFirebaseError = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
         Swal.fire({
           title: "Error",
           text: "Email already in use.",
           icon: "error",
         })
        break;
      case 'auth/invalid-email':
        Swal.fire({
          title: "Error",
          text: "Invalid email address.",
          icon: "error",
        })
        break;
      case 'auth/weak-password':
        Swal.fire({
          title: "Error",
          text: "Password must be at least 6 characters long.",
          icon: "error",
        })
        break;
      default:
        Swal.fire({
          title: "Error",
          text: errorCode,
          icon: "error",
        })
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Sign Up</h1>

      <label style={{ marginBottom: '10px', width: '300px' }}>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>

      <label style={{ marginBottom: '10px', width: '300px' }}>
        AR Number:
        <input type="text" value={AR_Number} onChange={(e) => setAR_Number(e.target.value)} required />
      </label>

      <label style={{ marginBottom: '10px', width: '300px' }}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>

      <label style={{ marginBottom: '10px', width: '300px' }}>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>

      <label style={{ marginBottom: '10px', width: '300px' }}>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </label>

      <button type="submit">Sign Up</button>

   
      <button onClick={() => onSignupBack()}>Back</button>
    </form>
  );
};

export default SignupForm;
