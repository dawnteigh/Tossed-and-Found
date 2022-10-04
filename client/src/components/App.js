import '../css/App.css'
import React, { useContext } from 'react'
import { Switch, Route } from "react-router-dom"
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import TossedAndFound from "../TossedAndFound.png"
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'
import Discs from './Discs'
import ScoreCard from './ScoreCard'
import Courses from './Courses'
import { UserContext } from '../context/user'

function App() {
  
  const { open, setOpen, errorMessages } = useContext(UserContext)

  const displayErrors = errorMessages.map((e, i) => {
    return (
      <li key={i} >{e}</li>
    )
  })

  return (
    <div className="App">
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
      >
        <Header icon>
          <Icon color='yellow' name='exclamation triangle' />
          Your request could not be completed. Here's why:
        </Header>
        <Modal.Content>
          <ul>
            {displayErrors}
          </ul>
        </Modal.Content>
        <Modal.Actions>
          <Button color='yellow' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
      <img src={TossedAndFound} alt="Tossed and Found" className="logo" />
      <NavBar />
      <Switch>
        <Route exact path="/signup" render={ (props) => <Signup { ...props } />} />
        <Route exact path="/login" render={ (props) =>  <Login { ...props } />} />
        <Route exact path="/discs" render={ (props) => <Discs { ...props }/>} />
        <Route exact path="/scorecard" render={ (props) => <ScoreCard { ...props }/>} />
        <Route exact path="/courses" render={ (props) => <Courses { ...props }/>} />
        <Route exact path="/*" render={ (props) => <Home { ...props }/>} />
      </Switch>
    </div>
  );
}

export default App;
