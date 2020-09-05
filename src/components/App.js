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

  return (
    <div>
      <GlobalStyle />
      <HeaderTitle>Hacker News <span className="remix">Remix</span></HeaderTitle>
      <StoryList storyIDs={storyIDs.slice(0, count)} count={count} />
      <LoadButton onClick={loadStories}>Load more stories</LoadButton>
    </div>
  );
}

export default App;