import React, { useState } from 'react';
import axios from 'axios';
import '../style/AddNews.css'
import Swal from 'sweetalert2';

const AddNews = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImageToCloudinary = async (): Promise<{ imageUrl: string; publicId: string } | null> => {
    if (!image) return null;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'pita_news');
    formData.append('cloud_name', 'dgm9hbcb1');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dgm9hbcb1/image/upload', formData);
      const { secure_url, public_id } = response.data;
      return { imageUrl: secure_url, publicId: public_id };
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e)

    const uploadResult = await uploadImageToCloudinary();
    if (!uploadResult) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to upload image.',
      })
      return;
    }

    const { imageUrl, publicId } = uploadResult;

    const newsData = {
      title,
      content,
      imageUrl,
      cloudinaryPublicId: publicId,
    };

    try {
      const response = await axios.post('https://fhss-asosiation-news.vercel.app/api/news/addNews', newsData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'News added successfully!',
          showConfirmButton: false,
          timer: 1500
        })
    
        setTitle("");
        setContent("");    
        setImage(null);
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add news.',
        })
      }
    } catch (error) {
      console.error('Error adding news:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add news.',
      })
    }
  };

  return (

    <div className="add-news-container">
    <h1 className="add-news-title">Add News</h1>
    <form onSubmit={handleSubmit} className="add-news-form">
      <div className="add-news-field">
        <label className="add-news-label">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="add-news-input"
        />
      </div>
      <div className="add-news-field">
        <label className="add-news-label">Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="add-news-textarea"
        />
      </div>
      <div className="add-news-field">
        <label className="add-news-label">Image:</label>
        <input type="file" accept="image/*" onChange={handleFileChange}  className="add-news-image-input"/>
        {image && <img src={URL.createObjectURL(image)} alt="Uploaded image" className="add-news-image-preview" />}
      </div>
      <button type="submit" className="add-news-button">
        Submit
      </button>
    </form>
    {/* {message && <p className="add-news-message">{message}</p>} */}
  </div>
  );
};

export default AddNews;
