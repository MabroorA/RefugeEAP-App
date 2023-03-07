import './css/JoinUs.css';
import React from 'react';

function HomePage() {
  return (
    <div id="page">
      <div id="title">
        <h1>How to Join us:</h1>
      </div>
      <div id="interest">
        <button>expression of interest</button>
      </div>
      <div id="contact">
        EMAIL: eap4socialjustice@baleap.org<br/>
​        TWITTER: @EapforSJ
      </div>
      <div id="mailing">
        <button><a class="link" href="https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=SJ-SIG-BALEAP">join mailing list</a></button>
      </div>
      <div id="inquiry">
        <h1 id="InqTitle">enquiry form</h1>
        <form action="/action_page.php">
          <label for="fname">Name: </label><br/>
          <input type="text" id="fname" name="fname"></input>
          <input type="text" id="sname" name="sname"></input><br/>
          <label for="email">Email:  </label><br/>
          <input type="email" id="EmailIn" name="EmailIn"></input>

        </form>

      </div>
      <div id="UniMailList">
        <button><a class="link" href="https://jiscmail.ac.uk/cgi-bin/webadmin?SUBED1=SANCTUARY&A=1">universtiy of Sanctuary JISCmail list sign up</a></button>
      </div>
    </div>
  );
}


export default HomePage;
