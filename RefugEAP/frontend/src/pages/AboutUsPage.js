import React from "react";
import "./css/AboutUsPage.css";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import face from "../images/face.png"

const AboutUs = () => {
  return (
    <>
      <Hero
        props={{
          title: "About Us",
          subtitle: "this is...",
          btn: "Read More",
          url: "#paragraph",
          style: 'about-hero'
        }}
        img={face}
      />
      <Slider/>
      <div className="section">
        <div className="content-section">
          <h2>Our Rationale</h2>
          <img
            src="https://eap4socialjustice.files.wordpress.com/2021/05/cropped-menu-test.jpg"
            alt="My Image"
            className="aboutus-image"
          />

          <ul>
            <div>
              <h3>A pragmatic view</h3>
              <li>
                Indeed, pragmatists may argue that the role of the EAP
                practitioner is, and should continue to be, limited to the nuts
                and bolts of teaching, learning, curriculum design and
                assessment, and that involvement in wider ideological concerns
                is beyond our remit. Such a perspective is often reinforced by
                the current trends towards the marketisation and commodification
                of programmes of study within the HE sector, which tends to
                instrumentalise activities related to these, thereby promoting
                in some learners and teachers a narrowing in how they see
                themselves and their roles. When seen in the light of Fromm’s
                humanist philosophy, such instrumentalisation can be regarded in
                terms of a general shift from being to having; from being a
                learner (or an educator) to having (or giving) a qualification
                in order to increase a student’s employability prospects through
                socialising them into existing cultural norms (Molesworth, Nixon
                & Scullion, 2009). An unequivocal alignment with this stance
                would imply that one believes that social justice has little to
                do with either EAP or with the remit of HEIs more generally.
              </li>
              <hr></hr>
              <h3>An alternative view</h3>
              <li>
                However, there is a small but growing movement against this
                normative stance, stemming from the work of Freire (1970:
                foreword), who stated: There is no such thing as a neutral
                education process. Education either functions as an instrument
                which is used to facilitate the integration of generations into
                the logic of the present system and bring about conformity to
                it, or it becomes the ‘practice of freedom’, the means by which
                men and women deal critically with reality and discover how to
                participate in the transformation of their world.
              </li>
              <li>
                In terms of how Freirean philosophy has been applied to EAP, it
                is most overtly evident in the literature on Critical EAP and
                Academic Literacies, which both use a social justice lens to
                encourage teachers and learners to critique the underlying power
                structures of HEIs, specific disciplines, academia more widely
                and society as a whole in order to challenge inequality in its
                many forms. Though intuitively appealing to many EAP
                practitioners who regard themselves as educators in the
                humanistic tradition and who encourage learners to belearners,
                these two research streams have not made a significant impact on
                the mainstream theories and practices of EAP to date (Ding &
                Bruce, 2017), though Academic Literacies has made more of an
                impact in the field of Learning Development.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
