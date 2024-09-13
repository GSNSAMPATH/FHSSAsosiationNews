import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  // const [Registation,setRegistation] = useState('');
  const [password, setPassword] = useState('');
  // const [ConformPassword, setConformPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(username, password)
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {"email": username,"password": password });
      if (response.status === 200) {
        if(response.data.message == 'Sucssessful login'){
          alert(response.data.message)
          navigate('/App');
        }
         
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', alignContent: 'center',backgroundColor: 'rgba(107, 100, 104, 0.38)', padding: '20px' }}>
    <h3 style={{ textAlign: 'center' }}>Login</h3>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}}>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} />
      </label>
      {/* <label style={{marginBottom: '10px',display: 'flex',flexDirection: 'column',width:'300px'}}>
        Registation number:
        <input type="text" value={Registation} onChange={e => setRegistation(e.currentTarget.value)} />
      </label> */}
      <label style={{marginBottom:'10px',display: 'flex',flexDirection: 'column',width:'300px'}}>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
      </label>
      {/* <label style={{marginBottom:'10px',display: 'flex',flexDirection: 'column',width:'300px'}}>
        Conform Password:
        <input type="password" value={ConformPassword} onChange={e => setConformPassword(e.currentTarget.value)} />
      </label> */}
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;
