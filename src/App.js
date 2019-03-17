import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar'
import Header from './component/Header'
import NextMeetup from './component/NextMeetup'
import AboutMeetup from './component/AboutMeetup'
import Members from './component/Members'
import PastMeetups from './component/PastMeetups'
import Footer from './component/Footer'

class App extends Component {
  state = {
    NextMeetup : {
      judul: "Awesome Meetup and Event",
      tanggal:"25 January 2019",
      caption:"<p> Hello, Javascript and Node.js Ninjas! <br/> Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br/> The meetup format will contain some short stories and technical talks. <br/> if you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. <br/> </p><p> Remember to bring a photo ID to get through building security. <br/>  </p> <p> ............ </p> <p> See you there!</p> <p> Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers </p>"
    }
  }
  
  render() {
    return (
      
      <Fragment>
      <NavBar/>
      <Header/>
        <NextMeetup 
          judul={this.state.NextMeetup.judul}
          tanggal={this.state.NextMeetup.tanggal}
          caption={this.state.NextMeetup.caption}
        />
        <AboutMeetup/>
        <Members/>
        <PastMeetups/>
        <Footer/>

      {/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>*/}

      </Fragment>
    );
  }
}

export default App;
