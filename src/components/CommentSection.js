import React, { useState, useEffect } from 'react';
import CommentThread from './CommentThread';
import { CommentModal, CommentHeader, MetaInfo, CloseButton } from '../style.js'
import { getPostTime } from './getPostTime';
import axios from 'axios';

const CommentSection = ({ show, handleShow, story }) => {
    const [comments, setComments] = useState(<p>loading comments...</p>);
    const [commentData, setCommentData] = useState(null);

    const getCommentData = async () => {
        const response = await axios.get("https://hn.algolia.com/api/v1/items/" + story.id);
        setCommentData(response.data.children.sort((a, b) => {
            return b.created_at_i - a.created_at_i;
        }));
    };

    useEffect(() => {
        if (show && story.kids !== undefined) {
            getCommentData();
        }
    }, [show]);

    useEffect(() => {
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
                        <MetaInfo>submitted {getPostTime(story.time)} ago by {story.by}</MetaInfo>
                    </div>
                    <CloseButton onClick={handleShow}>CLOSE</CloseButton>
                </CommentHeader>
                {story.kids !== undefined ? comments : <p>no comments yet</p>}
            </div>
        </CommentModal>
    );
}

export default CommentSection;