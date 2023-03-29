import "./css/JoinUs.css";
import React from "react";
import List from '../components/List';
import { JoinUsList } from "../data";

function JoinUs() {
  return (
    <div id="page">
      <div id="title">
        <h1>Join us</h1>
      </div>
      {JoinUsList.map((item) => {return <List props={item} />})}
      <div>
        <div>
          <p>
            You could contribute to our RefugEAP Network Resource Bank Padlet. In
            particular, we are looking for people to share any relevant
            sanctuary-related job/role descriptions, so that we can begin to build
            a bank of these to share. Similarly, if you notice any category of
            resources missing, please let us know and we can then add it
          </p>
        </div>
        <div>
          <p>
            Contribute a post to our website via the Blog. This might be in the
            form of a case study, a testimonial, or another type of contribution
          </p>
        </div>
        <div>
          <p>
            For any other queries, please contact RefugEAP Network Convenor Aleks
            Palanac at ap417@le.ac.uk
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
