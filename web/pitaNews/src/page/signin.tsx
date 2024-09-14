import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Authotication/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useUser } from '../components/UserContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const { signIn } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            if (userCredential.user.emailVerified) {
                const docRef = doc(db, 'users', userCredential.user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    console.log('User data:', userData);
                    const { AR_Number, username, role, email } = userData;
                    signIn({ AR_Number, username, role, email });
                    navigate('/home');
                } else {
                    setError('User data not found.');
                }
            } else {
                setError('Please verify your email before signing in.');
            }
        } catch (error: any) {
            handleFirebaseError(error.code); // Handle specific Firebase errors
        } finally {
            setLoading(false);
        }
    };

    const handleFirebaseError = (errorCode: string) => {
        switch (errorCode) {
            case 'auth/user-not-found':
                setError('No user found with this email.');
                break;
            case 'auth/wrong-password':
                setError('Incorrect password.');
                break;
            case 'auth/invalid-email':
                setError('Invalid email address.');
                break;
            default:
                setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container">
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
            </form>
        </div>
    );
};

export default Login;
