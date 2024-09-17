import { auth } from '../Authotication/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Flower from '../components/background'
import Navbar from '../routs/Navebar'
import './Home.css'; //Importing Css File here

export default function Home() {

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // Using for an un-athentcating users
    }
  })

  return (
    <>
    <Navbar />
    <div className ="home-container">

    <Flower />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
    
    
    </div>
    </div>
    </>
  )
}
