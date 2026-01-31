import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flipcard from "../../Assets/Projects/flip.png"
import vistore from "../../Assets/Projects/vistore.png"
import blog from "../../Assets/Projects/blog.png"
import portal from "../../Assets/Projects/portal.png"
import text from "../../Assets/Projects/textutilz.png"
import expense from "../../Assets/Projects/e.png"






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipcard}
              isBlog={false}
              title="FlipShop – E-commerce Website"
              description="An interactive e-commerce website designed with a flip card UI for showcasing products. Each product card displays essential details like image, title, and price, and flips on hover to reveal options such as Add to Cart or Buy Now. The platform offers a smooth and engaging shopping experience with a modern and responsive design."
              ghLink="https://github.com/AhmedHassanAwan/Flipkart-website01"
              demoLink="https://flipkart-website01.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vistore}
              isBlog={false}
              title="Vistore – E-commerce CRM UI"
              description="A modern e-commerce CRM website UI designed using Next.js and Tailwind CSS.
This project focuses only on the front-end design (UI), showcasing sections like Home, About, Reviews, Products, Blog, Dashboard Preview, and Testimonials. The website is fully responsive, clean, and professional, built to highlight design skills without backend functionality."
              ghLink="https://github.com/AhmedHassanAwan/Vistore"
              demoLink="https://vistore.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogify – Blogging Platform"
              description="A full-stack blogging platform built with React.js and Firebase. This app allows users to create, edit, and delete their blogs with a personalized dashboard. Features include secure authentication, blog management, and image uploads using Firebase Storage. The home page showcases blogs from all users, while each user has their own dedicated dashboard for managing personal content."
              ghLink="https://github.com/AhmedHassanAwan/React-Blogging-App"
              demoLink="https://react-blogging-app-six.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="An interactive expense tracker application built with React.js. It allows users to manage their expenses and income, categorize transactions, and view financial summaries. The app features a clean UI, responsive design, and dynamic data handling for an intuitive user experience."
              ghLink="https://github.com/AhmedHassanAwan/frontend "
              demoLink="https://frontend-expense-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="TextUtils"
              description="A simple and useful text utility application built with React.js. It provides various text manipulation features like converting text to uppercase/lowercase, removing extra spaces, copying text, and calculating word/character count. Designed with a clean UI, it helps users quickly format and analyze their text."
              ghLink="https://github.com/AhmedHassanAwan/Textutils-tast"
              demoLink="https://textutils-tast.vercel.app"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portal}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/AhmedHassanAwan/ENQUIRY-FORM"
              demoLink="https://enquiry-form-kohl.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
