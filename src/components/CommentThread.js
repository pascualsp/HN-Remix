import React, { useState, useEffect } from 'react';
import { MetaInfo, CommentContent, CommentText, ReplyContent } from '../style.js'
import { getPostTime } from './getPostTime';

const CommentThread = ({ cd }) => {
    const [replies, setReplies] = useState(null);

    useEffect(() => {
        // Recursive function that generates a comment's replies
        const getReplies = (comment, index) => {
            let currentComments = [];

            // Replies are sorted by oldest first
            comment = comment.sort((a, b) => {
                return a.created_at_i - b.created_at_i;
            });

            if (comment[index].author !== null) {
                let childComments = [];
                if (comment[index].children !== undefined && comment[index].children.length > 0) {
                    childComments = [...childComments, ...getReplies(comment[index].children, 0)];
                }

                currentComments.push(
                    <ReplyContent key={comment[index].id}>
                        <MetaInfo>{comment[index].author} {getPostTime(comment[index].created_at_i)} ago</MetaInfo>
                        <CommentText dangerouslySetInnerHTML={{ __html: comment[index].text }} />
                        {childComments}
                    </ReplyContent>
                );
            }

            if (index < comment.length-1) {
                currentComments = [...currentComments, ...getReplies(comment, index + 1)];
            }

            return currentComments;
        }

        if (cd.children.length > 0) {
            const replies = getReplies(cd.children, 0);
            setReplies(replies);
        }
    }, [cd]);

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