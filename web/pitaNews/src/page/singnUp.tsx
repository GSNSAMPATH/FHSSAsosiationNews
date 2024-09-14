import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useInsertionEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Authotication/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [AR_Number, setAR_Number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    else if (!password) {
      setError("Password must be at least 6 characters long");
      return;
    }

    else if (!username) {
      setError("Please Enter Username");
      return;
    }

    else if (!AR_Number) {
      setError("Please Enter AR Number");
      return;
    }

   

    try {
      // Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        AR_Number: AR_Number,
        email: email,
        role: "user",
      });
      await sendEmailVerification(auth.currentUser!);
      alert("Check your email for verification link");

   
      

      
    } catch (error) {
      console.error("Error signing up", error);
      setError((error as { message: string }).message.split(":")[1].trim());
    }
  };

  useInsertionEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential?.emailVerified == true) {
        navigate("/Login");
      }

    });
  }, []);

  return (
    <div style={{backgroundImage: "url('http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg')", backgroundSize: 'cover', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center",backgroundColor: 'rgba(45, 45, 45, 0.79)', padding: '40px' }}>
      <h1>Sign up</h1>

        <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}} >
          Name: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}} >
          AR: <input type="text" value={AR_Number} onChange={(e) => setAR_Number(e.target.value)} />
        </label>
    
        <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}} >
          Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
    
    
        <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}}>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
  
        <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}}>
          Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
     
        <button type="submit">Sign up</button>
 
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
    </div>
  );
}
