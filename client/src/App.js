import './App.css';
import React from 'react'
import { Switch, Route } from "react-router-dom"
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import Discs from './Discs';
import Scores from './Scores';
import ScoreCard from './ScoreCard';
import Courses from './Courses';
import DiscReturn from './DiscReturn';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/signup" render={ (props) => <Signup { ...props } />} />
        <Route exact path="/login" render={ (props) =>  <Login { ...props } />} />
        <Route exact path="/discs" render={ (props) => <Discs { ...props }/>} />
        <Route exact path="/scorecard" render={ (props) => <ScoreCard { ...props }/>} />
        <Route exact path="/scores" render={ (props) => <Scores { ...props }/>} />
        <Route exact path="/courses" render={ (props) => <Courses { ...props }/>} />
        <Route exact path="/found-disc" render={ (props) => <DiscReturn { ...props }/>} />
        <Route exact path="/" render={ (props) => <Home { ...props }/>} />
      </Switch>
    </div>
  );
}

export default App;
