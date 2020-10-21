import React, { useState, useEffect } from 'react';
import StoryText from './StoryText';
import CommentThread from './CommentThread';
import { CommentModal, CommentHeader, SiteSource, MetaInfo, CloseButton, Loader, LoaderText } from '../style.js'
import { getPostTime } from './getPostTime';
import axios from 'axios';

const CommentSection = ({ show, handleShow, story, source }) => {
    const [comments, setComments] = useState(
        <div className="centered">
            <Loader/>
            <LoaderText>Loading...</LoaderText>
        </div>
    );
    const [commentData, setCommentData] = useState(null);

    // Gets comment data from Algolia's Hacker News Search API (offers more efficient comment loading than the official HN API)
    const getCommentData = async () => {
        const response = await axios.get("https://hn.algolia.com/api/v1/items/" + story.id);

        // Comments are saved to state variable and sorted by newest first
        setCommentData(response.data.children.sort((a, b) => {
            return a.created_at_i - b.created_at_i;
        }));
    };

    useEffect(() => {
        if (show) {
            // Makes back button return to main page
            window.history.pushState(null, null);
            window.onpopstate = (e) => {
                e.preventDefault();
                handleShow();
            }

            if (story.kids !== undefined) {
                getCommentData();
            }
        }
    }, [show]);

    useEffect(() => {
        // Generates comment threads (comments + corresponding replies)
        if (commentData !== null) {
            const renderedList = commentData.map((cd) => {
                return <CommentThread
                    key={cd.id}
                    cd={cd}
                />
            });
            setComments(renderedList);
        }
    }, [commentData]);

    if (!show) {
        return null;
    }

    return (
        <CommentModal>
            <div className="modal-main">
                <CommentHeader>
                    <div>
                        <a href={story.url} target="_blank" rel="noopener noreferrer">
                            {story.title}
                        </a>
                        <SiteSource>{source}</SiteSource>
                        <MetaInfo>submitted {getPostTime(story.time)} ago by {story.by}</MetaInfo>
                    </div>
                    <CloseButton onClick={() => window.history.back()}>CLOSE</CloseButton>
                </CommentHeader>
                <StoryText text={story.text} />
                {story.kids !== undefined ? comments : <div className="centered"><p>no comments yet</p></div>}
            </div>
        </CommentModal>
    );
}

export default CommentSection;