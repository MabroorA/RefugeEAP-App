import './css/Home.css';
import React from 'react';
// import logo from './logo.jpg'
//import EventCalendar from '../components/EventCalendar'

function HomePage() {
  return (
    <div class="page">
      <div class="logo">
        {/* <img src={logo} alt="logo"></img> */}
      </div>
      <div class="keyInfo">
        <div class="title">RefugEAP</div>
        <div class="desc">EAP for Social Justice is one of the special interest groups of BALEAP, which is the global forum for English for Academic Purposes professionals. Our focus is on promoting social justice focused awareness, research and practice in the field of EAP.</div>
      </div>
      <div class="program">
        <div class="progR">
          <div class="programInfoTitle">The RefugEAP program</div>  
          RefugEAP is a free online pre-university academic English skills programme for refugee-background students across the UK.
          <a class="englishPage" href="/refugeap" target="_blank" rel="noopener noreferrer">
          <button id='mainButton'>LEARN MORE</button>
        </a>
        </div>
        <div class="progL">
          {/*<image src={image} alt="test"></image>*/}
        </div>
      </div>
      <div class="blogButton">
        <button id="mainButton">BLOG PLACEHOLDER</button>
      </div>
      <div class="twitter">
        <a class="twitter-timeline" href="https://twitter.com/RefugEAP?ref_src=twsrc%5Etfw" data-width="600" data-height="400" data-chrome="noscrollbar">Tweets by RefugEAP, note: will not load on local host but is functional once hosted </a>
      </div>
      <div class="currentEvents">
        <p> EVENT PLACEHOLDER</p>
        {/** <EventCalendar />*/}
      </div>
      <div>
        <div class="EnglishProvTitle">
          English Provisions
        </div>
        <div class="EnglishProInfo">Provisions for students looking to learn english.</div>
        <a class="englishPage" href="https://www.displacedstudent.org.uk/" target="_blank" rel="noopener noreferrer">
            <button id='mainButton'>LEARN MORE</button>
          </a>
      </div>
    </div>
  );
}


export default HomePage;
