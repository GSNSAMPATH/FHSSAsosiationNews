import React, { useEffect, useState } from 'react'
import '../style/admin.css'
import AddPost from '../components/addPost';
import AddNews from '../components/addNews';
import { useNavigate } from 'react-router-dom';
import Navbar from '../routs/Navebar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Authotication/firebase';
import { User, useUser } from '../components/UserContext';
import AllData from '../components/allData';

const Admin: React.FC = () => {
  const [page, setPage] = useState<'Addpost' | 'Addnews' | 'Aprofile' | 'allData'>('Addpost');
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      }
    });
  }, [navigate]);

  console.log(user);

  const handlePageChange = (newPage: 'Addpost' | 'Addnews' | 'allData' | 'Aprofile') => {
    setPage(newPage);
  };

  return (
    <div className='admin'>
      <Navbar />
        <div className='admin-panel'>
            <div className='admin-content1'>
              <div className='profile2'>
              <img
                  src={user?.profilePicture || "https://i.pravatar.cc/50"}
                  alt="profile"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', '@media (max-width: 768px)': {width: '50px', height: '50px'}}}
                />

              </div>
                <h3 style={{color:"white",fontSize:"30px",textAlign:"center",marginTop:"20px",fontWeight:"bold", '@media (max-width: 768px)': {fontSize: '20px'}}}>{user?.username}</h3>
                 <h3 style={{color:"white",fontSize:"20px",textAlign:"center",fontWeight:"bold",marginBottom:"20px", '@media (max-width: 768px)': {fontSize: '20px'}}}>Admin</h3>
                  <div className='content'>
                
                     <div className='link-with-components'>
                     <a
                  href='#'
                  onClick={() => handlePageChange('allData')}
                  className={page === 'allData' ? 'active' : ''}
                >
                  All Posts News
                </a>
                <a
                  href='#'
                  onClick={() => handlePageChange('Aprofile')}
                  className={page === 'Aprofile' ? 'active' : ''}
                >
                  Admin profile
                </a>
                <a
                  href='#'
                  onClick={() => handlePageChange('Addnews')}
                  className={page === 'Addnews' ? 'active' : ''}
                >
                  Add News
                </a>
                <a
                  href='#'
                  onClick={() => handlePageChange('Addpost')}
                  className={page === 'Addpost' ? 'active' : ''}
                >
                  Add Post
                </a>
                     </div> 
            
            </div></div>
            <div className='admin-content2'>
                <div className='content2-content'>
                    {page === 'Addpost' && <AddPost />}
                    {page === 'Addnews' && <AddNews />}
                    {page === 'allData' && <AllData />}
                    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;

