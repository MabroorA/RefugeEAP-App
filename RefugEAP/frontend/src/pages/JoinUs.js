import "./css/JoinUs.css";
import React from "react";

function JoinUs() {
  return (
    <div id="page">
      <div id="title">
        <h1>Join us</h1>
      </div>
      <div id="interest">
        <p>
          If you are keen to get involved as an active member of the RefugEAP
          Network Working Group (e.g. working to help us build content for the
          website) or perhaps a volunteer tutor on the RefugEAP Programme, you
          can fill in this online expression of interest form
        </p>
        <button class="mainButton">
          <a
            class="link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfy_N8cqvLV2FGPrfWBXR-W64asV0yz4AqdHwDTCiOmH93P7Q/viewform"
          >
            LEARN MORE
          </a>
        </button>
      </div>
      <div id="mailing">
        <p>
          Join the RefugEAP Network by subscribing to our JISCmail discussion
          list. This functions as a mutual support network for individuals and
          organisations involved and/or interested in developing widening
          participation initiatives for refugee-background students to
          facilitate access to HE via English language pathways, with a
          particular focus on English for Academic Purposes. It will also be a
          place where you can keep up to date with what’s happening in the
          Working Group and on the RefugEAP Programme (which will sometimes put
          out a call for more volunteer tutors via this JISCmail list)
        </p>
        <button class="mainButton">
          <a
            class="link"
            href="https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=SJ-SIG-BALEAP"
          >
            LEARN MORE
          </a>
        </button>
      </div>
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
      <div id="UniMailList">
        <p>
          Other similar networks which are not EAP-specific but which are very
          useful for those working in EAP/HE contexts are the Universities of
          Sanctuary JISCmail discussion list, and the Hub for European Refugee
          Education mailing list
        </p>
        <button class="mainButton">
          <a
            class="link"
            href="https://jiscmail.ac.uk/cgi-bin/webadmin?SUBED1=SANCTUARY&A=1"
          >
            LEARN MORE
          </a>
        </button>
      </div>
      <div>
        <p>
          For any other queries, please contact RefugEAP Network Convenor Aleks
          Palanac at ap417@le.ac.uk
        </p>
      </div>
    </div>
  );
}

export default JoinUs;
