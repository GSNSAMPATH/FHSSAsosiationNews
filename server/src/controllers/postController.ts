import { Request, Response } from 'express';
import post from '../models/postModel';
import cloudinary from 'cloudinary';

export const getPosts = async (_req: Request, res: Response): Promise<void> => {
    try {
        const posts = await post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const addPosts = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, content, imageUrl, cloudinaryPublicId } = req.body;
  
      const posts = new post({
        title,
        content,
        imageUrl,
        cloudinaryPublicId,
      });
  
      await posts.save();
      console.log('Post item added:', posts);
      res.status(201).json(posts);

      
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  

export const deleteOldPosts = async (): Promise<void> => {
    try {
        // Find news items that need to be deleted
        const oldPosts = await post.find({ createdAt: { $lte: new Date(Date.now() - 24 * 60 * 60 * 1000) } }).sort({ createdAt: -1 });
        console.log(`Found ${oldPosts.length} old post items.`);

        for (const post of oldPosts) {
            // Delete the image from Cloudinary
            await cloudinary.v2.uploader.destroy(post.cloudinaryPublicId);

            // Delete the news document from the database
            await post.deleteOne({ _id: post._id });

            console.log(`Deleted post item: ${post._id}`);
        }

        console.log(`Deleted ${oldPosts.length} old post items along with their images.`);
    } catch (error) {
        console.error('Error deleting old post and images:', error);
    }
};

