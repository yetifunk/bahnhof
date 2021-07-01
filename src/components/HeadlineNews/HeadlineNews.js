import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewsResults from './NewsResults/NewsResults';

export default function HeadlineNews() {

    const newsSearch = {
        key: process.env.REACT_APP_NEWS_API_KEY,
        api: 'https://gnews.io/api/v4/top-headlines?',
        apikey: 'token=',
        lang: '&lang=en'
    }

    const [headlines, setHeadlines] = useState([])

    useEffect(() => {
        getNews();
    }, []);

    async function getNews() {
        const url = `${newsSearch.api}${newsSearch.apikey}${newsSearch.key}${newsSearch.lang}`

        await fetch(url)
        .then(res => res.json())
        .then(result => {
            setHeadlines(result.articles)
        })
        .catch(console.error);
    }

    console.log(headlines)
    
    return (
        <>
            <div className="news-link">
                <Link to='/'><h1>Dashboard</h1></Link>
            </div>
            <div className="news">
                <NewsResults headlines={headlines} />
            </div>
        </>
    )
}