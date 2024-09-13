import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
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

    const uploadResult = await uploadImageToCloudinary();
    if (!uploadResult) {
      setMessage('Image upload failed.');
      return;
    }

    const { imageUrl, publicId } = uploadResult;

    const PostData = {
      title,
      content,
      imageUrl,
      cloudinaryPublicId: publicId,
    };
                                          
    try {
      const response = await axios.post('http://localhost:3000/api/posts/addPost', PostData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('post added successfully!');
    
        setTitle("");
        setContent("");    
        setImage(null);
   
        
      } else {
        setMessage('Failed to add post.');
      }
    } catch (error) {
      console.error('Error adding post:', error);
      setMessage('An error occurred while adding the Post.');
    }
  };

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', alignContent: 'center',backgroundColor: 'rgba(107, 100, 104, 0.38)', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Add Post</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px', width: '400px',justifyItems: 'center' }}>
          <label style={{ marginBottom: '10px'}}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '400px', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', width: '400px'}}>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: '400px', marginBottom: '10px', height: '100px' }}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded image" width="300" style={{ marginBottom: '10px' }} />}
        </div>
        <button type="submit" style={{ width: '300px' }} onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {message && <p style={{ textAlign: 'center' }}>{message}</p>}
    </div>

  );
};

export default AddPost;