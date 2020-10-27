import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
;

function Home() {
  return (
    <div>
      <Hero/>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>About Me</h3>  
              <h4>
                <a href="https://docs.google.com/document/d/1yQCSTAk_PQBnFeW250DK-PK4iIGzuw43AEp_VjsyCMM/edit?usp=sharing" target="_blank">Resume</a>
                {/* <a href="https://www.canva.com/design/DAEIkcy6wqU/3xs_etKHXsCQOtvBCLx1Yw/view?utm_content=DAEIkcy6wqU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank">Resume</a> */}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>I am a Full Stack Web Developer, leveraging 6 years of experience
             in IT to build beautiful, multi-featured, responsive websites building
              brand visibility and business functionality. I am an MCA (Master in Computer 
              Applications) and have previous work experience in System design, development and 
              implementation in Powerbuilder and Oracle. </p>
            <p>Recently I completed a full stack coding bootcamp from Northwestern 
               University and developed new frontend and backend skills. My current field of 
               interest is buildinf full-stack websites.   </p>
            <p>I am a detail-focused, problem solving web developer with good communication
              and teamwork skills, and a passion for coding. I want to further learn and grow
               in an organization and contribute there by doing high quality work. </p>
            <p>
              <strong>Technical Skills :</strong>
              <ul>
              <li>Languages : HTML, CSS, Javascript</li>
              <li>Libraries : React, Bootstrap, jQuery</li>
              <li>Databases : MySQL, MongoDB, Oracle</li>
              <li>Frameworks: Node.js, Express</li>
              <li>Tools     : Github, Heroku, AWS, Robo 3T, SQL Workbench, Powerbuilder</li>
              </ul>
            </p>           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
