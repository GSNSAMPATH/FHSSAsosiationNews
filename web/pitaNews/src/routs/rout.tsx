// ./routs/rout.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from '../page/addPost';
import App from '../App';
import Signup from '../page/singnUp';
import Login from '../page/login';
import Welcome from '../page/welcome';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Post" element={<AddPost/>} />
        <Route path='/App' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

