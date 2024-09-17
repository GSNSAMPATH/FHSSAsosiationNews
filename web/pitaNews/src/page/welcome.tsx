import { useNavigate } from 'react-router-dom'
import Flower from '../components/background'


const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div style={{  }}>
    <div style={{ display: 'flex',  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',gap: '20px',padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ textAlign: 'left',fontSize: '100px' }}>Welcome to </h1>
            <h1 style={{ textAlign: 'left',fontSize: '50px' }}>Pita News</h1>
            <button onClick={() => navigate('/SignIn')} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', marginTop: '20px', cursor: 'pointer',width: '200px' }}>Login</button>
        </div> 
     <Flower />
    </div>
    </div>
  )
}

export default Welcome
