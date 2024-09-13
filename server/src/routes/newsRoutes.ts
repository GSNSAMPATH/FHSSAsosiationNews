import { Router } from 'express';
import { getNews } from '../controllers/newsController';


const router = Router();

// router.post('/addNews', addNews);
router.get('/News', getNews);
// router.delete('/deleteOldNews',authMiddleware, deleteOldNews);

export default router;
