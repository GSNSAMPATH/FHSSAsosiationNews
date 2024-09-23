import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Authotication/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useUser } from '../../components/UserContext';
import Swal from 'sweetalert2';



interface loginformProps {
    onLogintoSingUp: () => void; // Pass success callback as prop
  }

const LoginForm: React.FC<loginformProps> = ({ onLogintoSingUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if the email is verified
            if (!user.emailVerified) {
                Swal.fire({
                    title: "Error",
                    text: "Please verify your email first.",
                    icon: "error",
                })
                return; // Prevent login if email is not verified
            }

            // Retrieve user data from Firestore
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                const { AR_Number, username, role, email } = userData;
                signIn({ AR_Number, username, role, email });
                console.log(userData);
                Swal.fire({
                    title: "Success",
                    text: "Login successful.",
                    icon: "success",
                })
                navigate('/home');
            } else {
                Swal.fire({
                    title: "Error",
                    text: "User not found.",
                    icon: "error",
                })
            }
        } catch (error: any) {
            Swal.fire({
                title: "Error",
                text: error.code,
                icon: "error",
            })
        } finally {
            setLoading(false);
        }
    };


    
   

    

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label>
                Email
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </label>
            <div className="error">{error}</div>

            {loading ? (
                <p>Loading...</p> // Show loading while waiting for response
            ) : (
                <button type="submit">Sign In</button>
            )}
            <button onClick={() => onLogintoSingUp()}>Sign Up</button>
        </form>
    );
};

export default LoginForm;
