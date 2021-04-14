import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentPage = () => {
    const { id } = useParams();
    const [story, setStory] = useState({});

    useEffect(() => {
        // Gets story data from Hacker News API
        const getStory = async () => {
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            setStory(response.data);
        };
        
        getStory();
    }, [id]);

    const source = (story.url !== undefined ? " (" + story.url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0] + ")" : null);

    if (story.id !== undefined) {
        return (
            <div>
                <CommentSection page={true} show={true} story={story} source={source} />
            </div>
        );
    } else {
        return null;
    }
}

export default CommentPage;