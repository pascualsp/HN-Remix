import React from 'react';
import { StoryContent, CommentText } from '../style.js'

const StoryText = ({ text }) => {
    if (text === undefined) {
        return null;
    }

    return (
        <StoryContent>
            <CommentText dangerouslySetInnerHTML={{ __html: text }} />
        </StoryContent>
    );
}

export default StoryText;