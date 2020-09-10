import React, { useState, useEffect } from 'react';
import { MetaInfo, CommentContent, CommentText, ReplyContent } from '../style.js'
import { getPostTime } from './getPostTime';

const CommentThread = ({ cd }) => {
    const [replies, setReplies] = useState(null);

    const getReplies = (comment, index, spacing) => {
        let currentComments = [];

        comment = comment.sort((a, b) => {
            return b.created_at_i - a.created_at_i;
        });

        if (comment[index].author !== null) {
            currentComments.push(
                <ReplyContent key={comment[index].id} spacing={spacing}>
                    <MetaInfo>{comment[index].author} {getPostTime(comment[index].created_at_i)} ago</MetaInfo>
                    <CommentText dangerouslySetInnerHTML={{ __html: comment[index].text }} />
                </ReplyContent>
            );

            if (comment[index].children !== undefined && comment[index].children.length > 0) {
                currentComments = [...currentComments, ...getReplies(comment[index].children, 0, spacing + 1)];
            }
        }

        if (index < comment.length-1) {
            currentComments = [...currentComments, ...getReplies(comment, index + 1, spacing)];
        }

        return currentComments;
    }

    useEffect(() => {
        if (cd.children.length > 0) {
            const replies = getReplies(cd.children, 0, 1);
            setReplies(replies);
        }
    }, []);

    if (cd.author === null) {
        return null;
    }

    return (
        <CommentContent>
            <MetaInfo>{cd.author} {getPostTime(cd.created_at_i)} ago</MetaInfo>
            <CommentText dangerouslySetInnerHTML={{ __html: cd.text }} />
            {replies}
        </CommentContent>
    );
}

export default CommentThread;