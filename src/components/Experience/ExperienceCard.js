// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
// import Experience from "./Experience";

// function ExperienceCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
         
        
//          \
//             <br />

           
//            <p>
//            <span className="purple">Internship Experience:</span> Completed a 3-month internship at Zaitoon Ashraf IT Park as a MERN Stack Developer, where I gained hands-on experience in building modern web applications and learned how to work effectively in a professional development environment.
//            </p>
        
         

         
  
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ExperienceCard;


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
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;