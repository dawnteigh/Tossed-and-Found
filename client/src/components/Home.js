import React, { useContext, useState } from 'react'
import { dataArrays } from '../dataArrays';
import { UserContext } from '../context/user';
import Messages from '../components/Messages';
import MyCourses from './MyCourses';
import Scores from '../components/Scores';
import DiscReturn from '../components/DiscReturn';
import { Accordion, Container, Grid, Icon, Image } from 'semantic-ui-react'

const Home = () => {
  const { loggedIn } = useContext(UserContext);
  const [activeIndex, setActiveIndex] = useState("");
  const [msgForm, setMsgForm] = useState({
    subject: "",
    to: "",
    body: ""
  })

  const randomImg = dataArrays.imgs[Math.floor(Math.random() * dataArrays.imgs.length)];

  if (!loggedIn) {
    return (
      <Container className="home">
        <h3>Welcome to Tossed & Found, your new disc golfing companion!<br/>
        Please log in or sign up to get started.</h3>
        <br/>
        <Image circular centered size="large" src={randomImg} alt="Tossed and Found" />
      </Container>
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
      <br/>
      <div className="home">
        <br/>
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
            <Messages msgForm={msgForm} setMsgForm={setMsgForm} />
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
            My Courses
          </Accordion.Title>
          <Accordion.Content active={activeIndex === "2"}>
            <MyCourses />
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === "3"}
            id={3}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            Found a disc?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === "3"}>
            <DiscReturn setActiveIndex={setActiveIndex} msgForm={msgForm} setMsgForm={setMsgForm} />
          </Accordion.Content>
        </Accordion>
      </div>
    </Grid>
  )
}

export default Home