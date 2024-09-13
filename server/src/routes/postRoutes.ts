import { Router } from 'express';
import { addPosts, getPosts, deleteOldPosts } from '../controllers/postController';


const router = Router();

router.post('/addPost',addPosts);
router.get('/posts', getPosts);
router.delete('/deletePost/:id', deleteOldPosts);

export default router;
