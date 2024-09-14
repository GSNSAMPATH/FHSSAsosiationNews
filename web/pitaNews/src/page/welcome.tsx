import { useNavigate } from 'react-router-dom'


const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Pita News</h1>
      <button onClick={() => navigate('/Login')}>Login</button>
    </div>
  )
}

export default Welcome
