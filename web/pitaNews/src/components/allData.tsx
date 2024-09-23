import { useEffect, useState } from 'react'
import { getPoster, getNews } from '../helpers/Api'
import Post from './show data/post'
import News from './show data/news'
import { PostData } from '../interface/post';
import { NewsData } from '../interface/News';

const AllData = () => {
    const [post, setPost] = useState<PostData[]>([]);
    const [news, setNews] = useState<NewsData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getPoster();
            setPost(response);
        }
        const fetchNews = async () => {
            const response = await getNews();
            setNews(response);
        }
        fetchPosts();
        fetchNews();
    }, [])

    console.log(post);

    return (
        <div className="all-data">
            <h2>Posts</h2>
            <Post posts={post} />
            <h2>News</h2>
            <News news={news} />
        </div>
    )
}

export default AllData;

