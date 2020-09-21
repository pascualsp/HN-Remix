import React from 'react';
import StoryEntry from './StoryEntry';

const StoryList = ({ storyIDs }) => {
    // Generates the list of stories to be displayed from the provided list of story IDs
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