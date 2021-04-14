import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import { StorySection, SiteSource, MetaInfo } from '../style.js';
import { getPostTime } from './getPostTime';
import axios from 'axios';

const StoryEntry = ({ storyID }) => {
    const [story, setStory] = useState({});
    const [toggle, setToggle] = useState(false);

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
        // Gets story data from Hacker News API
        const getStory = async () => {
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`);
            setStory(response.data);
        };

        getStory();
    }, [storyID]);

    // Gets the domain and subdomain of the source from the story URL
    const source = (story.url !== undefined ? " (" + story.url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0] + ")" : null);

    return (
        <StorySection>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
            </a>
            <SiteSource>{source}</SiteSource>
            <MetaInfo>submitted {getPostTime(story.time)} ago by {story.by}</MetaInfo>
            <p className="comments-button" onClick={() => toggleComments()}>{story.descendants || 0} comments</p>
            <CommentSection page={false} show={toggle} handleShow={toggleComments} story={story} source={source} />
        </StorySection>
    );
}

export default StoryEntry;