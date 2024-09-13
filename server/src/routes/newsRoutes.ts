import { Router } from 'express';
import { addNews, deleteOldNews, getNews } from '../controllers/newsController';
import authMiddleware from '../middlewares/authMiddleware';


const router = Router();

router.post('/addNews', addNews);
router.get('/News', getNews);
router.delete('/deleteOldNews',authMiddleware, deleteOldNews);

export default router;
