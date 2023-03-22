import "./css/Home.css";
import React from "react";
// import logo from './logo.jpg'
import EventCalendar from "../components/EventCalendar";
import Hero from "../components/Hero";
import { hero } from "../homeData";
import refugeap from "../images/RefugEAP.jpg";


function HomePage() {
  return (
    <>
      <Hero props={hero} img={refugeap} />
      <div class="page">
        <div class="program">
          <div class="progR">
            <div class="programInfoTitle">The RefugEAP program</div>
            RefugEAP is a free online pre-university academic English skills
            programme for refugee-background students across the UK.
            <a
              class="englishPage"
              href="/refugeap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="mainButton">LEARN MORE</button>
            </a>
          </div>
          <div class="progL">{/*<image src={image} alt="test"></image>*/}</div>
        </div>
      </div>
      <div class="blogButton">
        <a
          class="blogPage"
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="mainButton">BLOG</button>
        </a>
      </div>

      <div>
        <div>
          <div class="EnglishProvTitle">English Provisions</div>
          <div class="EnglishProInfo">
            Provisions for students looking to learn english.
          </div>
          <a
            class="englishPage"
            href="https://www.displacedstudent.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="mainButton">LEARN MORE</button>
          </a>
        </div>
      </div>
      <div class="RefugEAP-Timeline">
        <a
          class="twitter-timeline"
          href="https://twitter.com/RefugEAP?ref_src=twsrc%5Etfw"
          data-width="600"
          data-height="400"
          data-chrome="noscrollbar noheader nofooter"
          data-tweet-limit="1"
        >
          Tweets by RefugEAP{" "}
        </a>
      </div>
      <div class="BalEAP-Timeline">
        <a
          class="twitter-timeline"
          href="https://twitter.com/baleap?ref_src=twsrc%5Etfw"
          data-width="600"
          data-height="400"
          data-chrome="noscrollbar noheader nofooter"
          data-tweet-limit="1"
        >
          Tweets by BalEAP{" "}
        </a>
      </div>
      <EventCalendar />
    </>
  );
}

export default HomePage;
