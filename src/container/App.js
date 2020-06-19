import React, { useState } from 'react';

import './App.css';
import Header from '../components/header/Header';
import IdeaFeeds from '../components/ideaFeeds/IdeaFeeds';
// import Pagination from '../components/pagination/Pagination';

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const ajaxObj = {
    url: 'https://hn.algolia.com/api/v1/search?page='
  };
  const updateIndex = (index) => {
    setCurrentPageIndex(index);
  }
  return (
    <div className="App">
      <Header />
      <IdeaFeeds urlfetch={ajaxObj} pageIndex={currentPageIndex} />
    </div>
  );
}

export default App;
