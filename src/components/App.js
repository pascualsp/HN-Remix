import React, { useState, useEffect } from 'react';
import CommentPage from './CommentPage';
import StoryList from './StoryList';
import { GlobalStyle, HeaderTitle, LoadButton } from '../style.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [storyIDs, setStoryIDs] = useState([]);
  const [count, setCount] = useState(20);
  const [position, setPosition] = useState(0);

  // Loads the IDs of the top 500 stories recently posted from the Hacker News API
  const getStories = async () => {
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json");
    setStoryIDs(response.data);
  };

  // Increases count which dictates how many stories are shown
  const loadStories = () => {
    setPosition(document.documentElement.scrollTop);
    setCount(count + 20);
  };

  useEffect(() => {
    getStories();
  }, []);

  // Retains scrollbar position after loading more stories (fixes issue w/ Chrome)
  useEffect(() => {
    document.documentElement.scrollTop = position;
  }, [count, position]);

  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route path="/story/:id">
            <CommentPage />
          </Route>
          <Route path="/">
            <div className="content-section">
              <HeaderTitle>Hacker News <span className="remix">Remix</span></HeaderTitle>
              <StoryList storyIDs={storyIDs.slice(0, count)} />
            </div>
            <div className="centered">
              <LoadButton onClick={loadStories}>LOAD MORE STORIES</LoadButton>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;