import React from 'react';
import StoryEntry from './StoryEntry';

const StoryList = ({ storyIDs }) => {
    const renderedList = storyIDs.map((storyID, index) => {
        return <StoryEntry
            key={index}
            storyID={storyID}
        />;
    });

    return (
        <div>
            {renderedList}
        </div>
    );
}

export default StoryList;