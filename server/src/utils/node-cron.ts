import cron from 'node-cron';
// import { deleteOldNews } from '../controllers/newsController';
import { deleteOldPosts } from '../controllers/postController';

// Schedule to run every 10 minutes
export const startCron = () => {
    console.log('Starting cron job...');
    cron.schedule('0 */2 * * *', async () => {
        try {
            console.log('Cron job executed at:', new Date());
            // await deleteOldNews();
            await deleteOldPosts();
        } catch (error) {
            console.error('Error deleting old news and images:', error);
        }
    });
};



