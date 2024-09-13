import { Router } from 'express';
import { registerUser} from '../controllers/userController';
// import authMiddleware from '../middlewares/authMiddleware';


const router = Router();


router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', authMiddleware, getUserProfile);


export default router;
