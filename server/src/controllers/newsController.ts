import { Request, Response } from 'express';
import News from '../models/newsModel';
// import cloudinary from 'cloudinary';
// import multer from 'multer';

// cloudinary.v2.config({
//     cloud_name:  'dgm9hbcb1',
//     api_key:  '725234783129762',
//     api_secret:  'I6Y_O-mli_vyccOCOLE47p_2d3M',
// });

export const getNews = async (req: Request, res: Response): Promise<void> => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


// const upload = multer({ dest: 'uploads/' });

// const upload = multer({ dest: 'uploads/' });



// export const addNews = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { title, content} = req.body;
//         console.log('Title:', title);
//         console.log('Content:', content);


//         // Upload image to Cloudinary
//         if (req.file) {
//             console.log('File:', req.file.path);
//             const result = await cloudinary.v2.uploader.upload(req.file?.path);
//             const imageUrl = result.secure_url;
//             const cloudinaryPublicId = result.public_id;

//             const news = new News({
//                 title,
//                 content,
//                 imageUrl,
//                 cloudinaryPublicId,
//             });

//             await news.save();
//             res.status(201).json(news);
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// export const addNews = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const { title, content, imageUrl, cloudinaryPublicId } = req.body;
  
//       const news = new News({
//         title,
//         content,
//         imageUrl,
//         cloudinaryPublicId,
//       });
  
//       await news.save();
//       console.log('News item added:', news);
//       res.status(201).json(news);

      
//     } catch (error) {
//       res.status(500).json({ message: 'Server error', error });
//     }
//   };
  

// export const deleteOldNews = async (): Promise<void> => {
//     try {
//         // Find news items that need to be deleted
//         const oldNews = await News.find({ createdAt: { $lte: new Date(Date.now() - 24 * 60 * 60 * 1000) } }).sort({ createdAt: -1 });
//         console.log(`Found ${oldNews.length} old news items.`);

//         for (const news of oldNews) {
//             // Delete the image from Cloudinary
//             await cloudinary.v2.uploader.destroy(news.cloudinaryPublicId);

//             // Delete the news document from the database
//             await News.deleteOne({ _id: news._id });

//             console.log(`Deleted news item: ${news._id}`);
//         }

//         console.log(`Deleted ${oldNews.length} old news items along with their images.`);
//     } catch (error) {
//         console.error('Error deleting old news and images:', error);
//     }
// };
