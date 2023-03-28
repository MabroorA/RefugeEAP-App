import "./css/Home.css";
import React from "react";
// import logo from './logo.jpg'
import EventCalendar from "../components/EventCalendar";
import Hero from "../components/Hero";
import { hero } from "../homeData";
import refugeap from "../images/RefugEAP.jpg";
import { homePageList } from "../homeData";
import List from '../components/List';


function HomePage() {
  return (
    <>
      <Hero props={hero} img={refugeap} />

      {homePageList.map((item) => {return <List props={item} />})}

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
