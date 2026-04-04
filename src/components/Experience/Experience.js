// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import ExperienceCard from "./ExperienceCard";
// import Image from  "../../Assets/developer.gif"


// function Experience() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               <strong className="purple">Experience</strong>
//             </h1>


//             <ExperienceCard/>
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={Image} alt="about" className="img-fluid" />
//           </Col>
//         </Row>

//   </Container>
//     </Container>    
//     );
// }
// export default Experience;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import Image from "../../Assets/developer.gif";

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Experience</strong>
            </h1>

            <ExperienceCard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Image} alt="about" className="img-fluid" />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
