import axios from "axios";

export const getPoster = async () => {
    try {
        const response = await axios.get(`https://fhss-asosiation-news.vercel.app/api/posts/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching poster:', error);
        return '';
    }
};

export const getNews = async () => {
    try {
        const response = await axios.get(`https://fhss-asosiation-news.vercel.app/api/news/News`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return '';
    }
};
