import React, { useState, useEffect } from 'react';
import { StorySection, StoryMetaInfo } from '../style.js';
import { getPostTime } from './getPostTime';
import axios from 'axios';

const StoryEntry = ({ storyID }) => {
    const [story, setStory] = useState({});

    const getStory = async () => {
        const response = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json");
        setStory(response.data);
    };

    useEffect(() => {
        getStory();
    }, []);

    return (
        <StorySection>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
            </a>
            <StoryMetaInfo>submitted {getPostTime(story.time)} ago by {story.by}</StoryMetaInfo>
            <p className="comments">{story.descendants} comments</p>
        </StorySection>
    );
}

export default StoryEntry;