import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../../routs/Navebar';

const Child1: FC = () => {
  return (
    <><Navbar />
    <div style={{}}>
          <h1>Child 1</h1>
      </div></>
  );
};

export default Child1;
