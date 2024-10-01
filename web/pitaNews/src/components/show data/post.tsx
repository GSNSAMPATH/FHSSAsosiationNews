import React from 'react'
import { PostData } from '../../interface/post'
import { IoAddCircleOutline } from "react-icons/io5";
import '../../style/show_data.css'


const addBottn = () => {
  console.log(" clicked");
}
const NewsList = ({ posts }: { posts: PostData[] }) => {



    return (
      <div className="news-list-container">
      <div className="news-list">

        {posts.map((newsItem) => (
          <div key={newsItem._id} className="news">
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-image" />
            <h3 style={{ color: "black" }}>{newsItem.title}</h3>
            {/* <p>{newsItem.content}</p> */}
          </div>
        ))}

      </div>
      <button className="add-button" onPause={addBottn}>
      <IoAddCircleOutline className=" add-icon" />
      </button>
    </div>
    )
  }

export default NewsList


