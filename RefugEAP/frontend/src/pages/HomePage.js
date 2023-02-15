import './css/Home.css';
import React from 'react';
// import logo from './logo.jpg'

function HomePage() {
  return (
    <div class="page">
      <div class="logo">
        {/* <img src={logo} alt="logo"></img> */}
      </div>
      <div class="keyInfo">
        <br></br>
        <p>EAP for Social Justice is one of the special interest groups of BALEAP, which is the global forum for English for Academic Purposes professionals. Our focus is on promoting social justice focused awareness, research and practice in the field of EAP.</p>
      </div>
      <div class="programButton">
        <button id="mainButton">Program Button</button>
      </div>
      <div class="blogButton">
        <button id="mainButton">Most recent blog link</button>
      </div>
      <div class="twitter">
        <a class="twitter-timeline" href="https://twitter.com/RefugEAP?ref_src=twsrc%5Etfw" data-width="600" data-height="400" data-chrome="noscrollbar">Tweets by RefugEAP, note: will not load on local host but is functional once hosted </a>
      </div>
      <div class="currentEvents">
        <p> Current event infomation</p>
      </div>
      <div>
        <a class="englishPage" href="https://www.displacedstudent.org.uk/" target="_blank" rel="noopener noreferrer">
          <button id='mainButton'>English Provisions</button>
        </a>
      </div>
    </div>
  );
}


export default HomePage;
