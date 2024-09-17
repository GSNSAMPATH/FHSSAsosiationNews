import { auth } from '../Authotication/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Flower from '../components/background'
import Navbar from '../routs/Navebar'

export default function Home() {

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // Using to un athentcating users
    }
  })

  return (
    <>
    <Navbar />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
    
  
    <Flower />
    </div>
    </>
  )
}
