import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Authotication/firebase';

interface forgotpasswordProps {
    onForgotPasswordSuccess: () => void; // Pass success callback as prop
  }

const ForgotPassword : React.FC<forgotpasswordProps> = ({ onForgotPasswordSuccess }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSent(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setIsSent(true);
      onForgotPasswordSuccess()
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <p>Enter your email address and we will send you an email with a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <button type="submit">Send reset password email</button>
        {error && <p className="error">{error}</p>}
        {isSent && <p className="success">Email sent, please check your inbox</p>}
        <button onClick={() => onForgotPasswordSuccess()}>Back</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
