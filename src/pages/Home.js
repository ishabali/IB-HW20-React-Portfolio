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
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am a Web Developer based in Chicago. I have a work experience of over 6 years as a programmer.
            I am a Masters in Computer Applications. </p>
           <p>
            I have work-experience in development in Powerbuilder, Delphi and Oracle and in 
            Project Design. My current area of interest is Web Development. 
            I am a full-stack web developer.             
            </p>
            <a href="https://docs.google.com/document/d/1DS2DIkUIm5BBt7SLdHHnEHezM81L-nASURQsF62X2Lg/edit?usp=sharing" target="_blank">Resume</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
