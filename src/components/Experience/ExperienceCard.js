import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "left" }}>
            <span className="purple">Internship Experience:</span>{" "}
            I completed a 3-month internship at{" "}
            <span className="purple">Zaitoon Ashraf IT Park</span> as a{" "}
            <span className="purple">MERN Stack Developer</span>. During this
            period, I worked on real-world web applications and gained
            hands-on experience with modern technologies including React,
            Node.js, Express, and MongoDB.
            <br /><br />
            I also developed a strong understanding of writing clean code,
            problem-solving, and working in a professional development
            environment.

            <br /><br />

            <span className="purple">Current Experience:</span>{" "}
            I am currently working at{" "}
            <span className="purple">Techzify Solutions</span> as a{" "}
            <span className="purple">Full Stack Developer</span>. In this role,
            I am involved in developing and maintaining scalable web applications
            using the MERN stack. I am also responsible for building APIs,
            integrating frontend with backend services, and collaborating with
            the team to deliver high-quality products.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;