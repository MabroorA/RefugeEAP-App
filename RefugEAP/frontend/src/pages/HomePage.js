import './css/Home.css';
import React from 'react';
// import logo from './logo.jpg'

function HomePage() {
  return (
    <div class="page">
      <div class="logo">
        {/* <img src={logo} alt="logo"></img> */}
      </div>
      <div class="navBar">
        <ul>
          <li><a href='home.html'> Home </a></li>
          <li><a href='about.html'> About Us</a></li>
        </ul>
      </div>
      <div class="keyInfo">
        <p>EAP for Social Justice is one of the special interest groups of BALEAP, which is the global forum for English for Academic Purposes professionals. Our focus is on promoting social justice focused awareness, research and practice in the field of EAP.</p>
      </div>
      <div class="programButton">
        <button id="mainButton">Program Button</button>
      </div>
      <div class="blogButton">
        <button id="mainButton">Most recent blog link</button>
      </div>
      <div class="twitter">
        <a class="twitter-timeline" href="https://twitter.com/RefugEAP?ref_src=twsrc%5Etfw" data-width="500" data-height="400" data-chrome="noscrollbar">Tweets by RefugEAP, note: will not load on local host but is functional once hosted </a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
      <div class="currentEvents">
        <p> Current event infomation</p>
      </div>
      <div class="englishPage">
        <button id='mainButton'>english</button>
      </div>
    </div>
  );
}


export default HomePage;
