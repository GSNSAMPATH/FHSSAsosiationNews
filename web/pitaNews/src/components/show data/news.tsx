import React from 'react'
import { NewsData } from '../../interface/News'
import '../../style/show_data.css'


const NewsList = ({ news }: { news: NewsData[] }) => {
    return (
      <div className="news-list">
        {news.map((newsItem) => (
          <div key={newsItem._id} className='news scroll-item'>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" />
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content}</p>
          </div>
        ))}
      </div>
    )
  }




export default NewsList
