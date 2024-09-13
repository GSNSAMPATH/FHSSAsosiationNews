// ./routs/rout.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../page/login';
import AddPost from '../page/addPost';
import App from '../App';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Post" element={<AddPost/>} />
        <Route path='/App' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

