import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am  <span className="purple m-2"> Ahmed Hassan Awan</span>  
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
        
            <br />
          I am a passionate <span className="purple"> MERN Stack Developer  </span>  with experience in building modern and responsive web applications.
I have completed a MERN Stack course and continuously improve my skills to become a professional software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
