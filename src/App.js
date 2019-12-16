import React from 'react';
import './App.css';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router history = {createHistory()}>
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;