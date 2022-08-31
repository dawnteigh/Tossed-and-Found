import React, { useContext, useState } from 'react'
import { UserContext } from './context/user';
import Messages from './Messages';
import Scores from './Scores';
import DiscReturn from './DiscReturn';
import { Accordion, Grid, Icon } from 'semantic-ui-react'
const Home = () => {
  const { user, loggedIn } = useContext(UserContext);
  const [activeIndex, setActiveIndex] = useState("0");
 

  if (!loggedIn) {
    return (
      <h3>Log in, bro</h3>
    )
  }

  const handleClick = (e) => {
    if (e.target.id === activeIndex) {
      setActiveIndex(false)
    } else {
      setActiveIndex(e.target.id)
    }
  }

  return (
    <Grid centered>
      <div id="home" >
        Hey, {user.username}!<br/>
        <Accordion styled >
          <Accordion.Title
            active={activeIndex === "0"}
            id={0}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Messages
          </Accordion.Title>
          <Accordion.Content active={activeIndex === "0"}>
            <Messages />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === "1"}
            id={1}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Scores
          </Accordion.Title>
          <Accordion.Content active={activeIndex === "1"}>
            <Scores />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === "2"}
            id={2}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Found a disc?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === "2"}>
            <DiscReturn setActiveIndex={setActiveIndex} />
          </Accordion.Content>
        </Accordion>
      </div>
    </Grid>
  )
}

export default Home