import React, { useState, useEffect } from 'react';
import StoryList from './StoryList';
import { GlobalStyle, HeaderTitle, LoadButton } from '../style.js';
import axios from 'axios';

const App = () => {
  const [storyIDs, setStoryIDs] = useState([]);
  const [count, setCount] = useState(20);

  const getStories = async () => {
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json");
    setStoryIDs(response.data);
  };

  const loadStories = async () => {
    setCount(count + 10);
  };

  useEffect(() => {
    getStories();
  }, []);

  // TODO: MOVE SCROLLBAR TO CORRECT POSITION AFTER LOADBUTTON PRESS RATHER THAN STAYING AT BOTTOM

  return (
    <div>
      <GlobalStyle />
      <div className="content-section">
        <HeaderTitle>Hacker News <span className="remix">Remix</span></HeaderTitle>
        <StoryList storyIDs={storyIDs.slice(0, count)} count={count} />
      </div>
      <div className="centered">
        <LoadButton onClick={loadStories}>LOAD MORE STORIES</LoadButton>
      </div>
    </div>
  );
}

export default App;