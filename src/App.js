import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize= 8;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} type="general" />} />
          <Route exact path="/national" element={<News setProgress = {setProgress} apiKey={apiKey} key="india" pageSize={pageSize} type="india" />} />
          <Route exact path="/international" element={<News setProgress = {setProgress} apiKey={apiKey} key='world' pageSize={pageSize} type="world" />} />
          <Route exact path="/bussiness" element={<News setProgress = {setProgress} apiKey={apiKey} key="bussiness" pageSize={pageSize} type="bussiness" />} />
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} type="health" />} />
          <Route exact path="/crypto" element={<News setProgress = {setProgress} apiKey={apiKey} key="crypto" pageSize={pageSize} type="crypto" />} />
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} type="technology" />} />
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} type="sports" />} />
          <Route exact path="/games" element={<News setProgress = {setProgress} apiKey={apiKey} key="games" pageSize={pageSize} type="games" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;