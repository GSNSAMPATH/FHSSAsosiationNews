import React from 'react'
import { PostData } from '../../interface/post'
import '../../style/show_data.css'



const NewsList = ({ posts }: { posts: PostData[] }) => {
    return (
      <div className="news-list">
        {posts.map((newsItem) => (
          <div key={newsItem._id} className="news">
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" />
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content}</p>
          </div>
        ))}
      </div>
    )
  }

export default NewsList


