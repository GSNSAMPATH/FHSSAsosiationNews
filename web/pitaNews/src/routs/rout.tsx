// ./routs/rout.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from '../components/addPost';
import App from '../App';
// import Signup from '../page/singnUp';
import Welcome from '../page/welcome';

import Home from '../page/Home';



import { UserProvider } from '../components/UserContext';
import AuthPage from '../page/Loging';
import Admin from '../page/Admin';
import Child1 from '../page/Home/SpecialNotice';
import Kuppi from '../page/Home/Kuppi';
import ContactUs from '../page/Home/ContactUs';
import About from '../page/Home/about';
import Profile from '../page/profile';


const Router = () => {

  return (
    <UserProvider>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />}/>
     
        {/* <Route path="/signin" element={<Login/>} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/home" element={<Home />}/>
          

     
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path='/App' element={<App/>}/>
        <Route path="/child1" element={<Child1 />} />
        <Route path="/kuppi" element={<Kuppi />} />
        <Route path="/contacus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
      </UserProvider>
  );
};

export default Router;

