import Section from "../components/Section";
import styled from "styled-components";


const Content = styled.div`

  max-width: 800px;
  align-items: flex-start;
  justify-content: center;

    h1 {
    text-align: center;
    margin-bottom: 16px;
    width: 100%;
  }

  h2 {
    margin-bottom: 16px;
  }

  h3 {
    margin-top: 24px;
    margin-bottom: 12px;
  }

  p {
    text-align: justify;
    line-height: 1.6;
  }

`;

function About() {
  return (
    <Section id="about" >

      <Content 
      >
        <h1 >About Me!</h1>

        <p>
          I am an Electronics and Communication Engineering graduate with a strong
          interest in VLSI design and hardware systems. Currently, I am preparing for
          higher studies and actively building my technical skills in digital design,
          embedded systems, and software development.
        </p>

      </Content>

    </Section>
  );
}

export default About;