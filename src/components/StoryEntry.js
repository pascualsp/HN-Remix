import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import { StorySection, MetaInfo } from '../style.js';
import { getPostTime } from './getPostTime';
import axios from 'axios';

const StoryEntry = ({ storyID }) => {
    const [story, setStory] = useState({});
    const [toggle, setToggle] = useState(false);

    // Gets story data from Hacker News API
    const getStory = async () => {
        const response = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + storyID + ".json");
        setStory(response.data);
    };

    // Toggles comments section display
    const toggleComments = () => {
        if (toggle) {
            document.body.style.overflow = 'visible';
        } else {
            document.body.style.overflow = 'hidden';
        }
        setToggle(!toggle);
    };

    useEffect(() => {
        getStory();
    }, []);

    return (
        <StorySection>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
            </a>
            <MetaInfo>submitted {getPostTime(story.time)} ago by {story.by}</MetaInfo>
            <p className="comments-button" onClick={() => toggleComments()}>{story.descendants || 0} comments</p>
            <CommentSection show={toggle} handleShow={toggleComments} story={story} />
        </StorySection>
    );
}

export default StoryEntry;