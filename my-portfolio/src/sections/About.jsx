import Section from "../components/Section";
import styled from "styled-components";

const Content = styled.div`

  max-width: 800px;
  alignItems: "flex-start",

  h2 {
    margin-bottom: 16px;
  }

  h3 {
  margin-top: 24px;
  margin-bottom: 12px;
}
`;

function About() {
  return (
    <Section id="about">

      <Content 
      >
        <h2>About Me!</h2>
        <p>
          I am an Electronics and Communication Engineering graduate with a strong
          interest in VLSI design and hardware systems. Currently, I am preparing for
          higher studies and actively building my technical skills in digital design,
          embedded systems, and software development.
        </p>


        <h3>Skills</h3>

        <ul>
          <li>Digital Electronics</li>
          <li>Verilog / VHDL</li>
          <li>Embedded Systems</li>
          <li>Signal Processing</li>
          <li>C / Python</li>
          <li>Linux / Git</li>
        </ul>
      </Content>

    </Section>
  );
}

export default About;