// ./routs/rout.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from '../page/addPost';
import App from '../App';
// import Signup from '../page/singnUp';
// import Welcome from '../page/welcome';
import Home from '../page/Home';
import Login from '../components/auth/signin';
import { UserProvider } from '../components/UserContext';
import AuthPage from '../page/Loging';

const Router = () => {

  return (
    <UserProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        {/* <Route path="/signin" element={<Login/>} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/Post" element={<AddPost/>} />
        <Route path='/App' element={<App/>}/>
      </Routes>
    </BrowserRouter>
      </UserProvider>
  );
};

export default Router;

