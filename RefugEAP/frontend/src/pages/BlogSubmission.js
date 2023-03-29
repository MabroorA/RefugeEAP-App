import React from "react";
import Row from "react-bootstrap/esm/Row";
import BlogForm from "../components/BlogForm";
import "./BlogPage.css";

const BlogSubmission = () => {
  return (
    <div className="blog-form">
      <Row className="form-hero">
        <div className="form-title">
          <h1>Share your thoughts</h1>
        </div>
      </Row>
      <Row className="form-main">
        <div className="form-text">
          <div className="text-format">
            <dl>
              <dd>
                We encourage contributions to our RefugEAP Network Blog in
                accordance with the submission guidelines below:{" "}
              </dd>
              <dt>
                1. Ensure that your submission is relevant to the RefugEAP
                Network`s main objective of facilitating the development and
                implementation of "pathway to Higher Education" English language
                provision for refugee-background students (RBS), with a
                particular focus on English for Academic Purposes (EAP).{" "}
              </dt>
              <dt>
                2. Indicate which of the following categories your submission
                falls under:
              </dt>
              <dd>
                <b>Case study</b> - this can focus on one of more types of
                "pathway to HE" English language provision, and should outline
                what the provision is, how it was set up, what challenges were
                faced along the way, how these were tackled, what the impact of
                the initiative was, etc.
              </dd>
              <dd>
                <b>Testimonial</b> - these can be submitted by practitioners,
                researchers or students involved in this provision:
              </dd>
              <dd>
                i. For practitioner/researcher testimonials, these should
                include name (if happy to share), role, institution, initiative
                involved with, reasons for getting involved, impact on
                themselves and on the students.
              </dd>
              <dd>
                ii. For student testimonials, these should include name (if
                happy to share), country of origin, future goal, what they need
                to study at university to reach this goal, what challenges they
                have faced along the way, what EAP provision they have accessed
                to help them reach this goal, what impact it has had on them,
                what advice they would give to future students
              </dd>
              <dd>
                <b>Other</b> - this category is deliberately broad, and might
                cover submissions such as those which focus on one aspect
                relating to developing or running this type of "pathway to HE"
                English language provision - perhaps related to developing
                suitable materials, how to build in progression opportunities,
                how to ensure provision is trauma-informed, how to work
                successfully with partner organisations, or how you might
                advocate for increased opportunities for RBS within your
                institution.{" "}
              </dd>
              <dt>
                3. We accept posts from a range of perspectives – practitioner,
                student, research, policy or personal. Submissions might also
                span two or more perspectives, perhaps by being written in
                collaboration with others (e.g. student-practitioner){" "}
              </dt>
              <dt>
                4. In order for your post to contribute to the RefugEAP Network
                evidence base, please ensure it is measured in its approach and
                supported with evidence. Depending on the perspective you are
                writing from, this evidence might be from academic sources, blog
                posts, reports, websites and other grey literature. If you are
                writing from a personal perspective, please include some
                biographical and situational context.{" "}
              </dt>
              <dt>5. In terms of language, please ensure that:</dt>
              <dd>
                Any terminology used is accessible to non-specialists by using
                clear language and explaining any acronyms or technical terms
                used.
              </dd>
              <dd>No offensive or discriminatory language is used.</dd>
              <dt>6. In terms of submission format:</dt>
              <dd>
                This might take the form of a written blog post, a vlog, an
                interview, or something else - we are open to suggestions!
              </dd>
              <dd>
                If your submission contains text, you can paste it directly into
                the form below, or upload it as a MS Word document if you prefer
                (also via the form). An ideal length for blog posts is around
                500-1000 words (but we are open to longer or shorter submissions
                too)
              </dd>
              <dd>
                Other formats which you can upload via the form are images,
                audio files, video files and pdfs (N.B. please ensure you have
                the permission of anyone captured in audio/video/image files
                before submitting them to us)
              </dd>
            </dl>
          </div>
        </div>
      </Row>
      <Row className="form-form">
        <BlogForm/>
      </Row>
    </div>
  );
};

export default BlogSubmission;
