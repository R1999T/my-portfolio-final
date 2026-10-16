import Section from "../components/Section";
import styled from "styled-components";
import "./Hero.css";

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
    <Section id="about" fullHeight style={{ paddingTop: "80px" }} hideDivider>
      <Content>
        {/* Hero content */}
        <div
          className="hero-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "90px",
            gap: "40px",
            padding: "0 40px",
            alignItems: "center",
          }}
        >
          <div
            className="hero-image"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              // border: "5px solid #1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/angry_birds_kid.jpg"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>

          <div
            className="hero-text"
            style={{
              maxWidth: "500px",
              lineHeight: "1.5",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: "10px", alignItems: "center" }}>
              HOLA! I'm RAGHAV TIWARI
            </h1>
            <h2 style={{ marginBottom: "10px", fontWeight: "normal" }}>
              Aspiring AI/ML Engineer
            </h2>

            <a href="/files/rt_resume.pdf" download className="resume-button">
              Download Resume
            </a>
          </div>
        </div>

        {/* About content */}
        {/* Divider */}
        <hr
          style={{
            width: "100%",
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "80px",
            marginBottom: "40px",
          }}
        />
        <h1 style={{ marginTop: "60px" }}>About Me!</h1>
        <p>
          I’m an ECE grad turned software engineer who writes a lot of Python
          and doesn’t mind the plumbing either. I’ve built FastAPI backends on
          SOLID principles, packaged and deployed them with Poetry, and run them
          on Linux servers, Docker, Kubernetes, and Google Cloud, with some
          React and generative AI agents along the way. Now I’m doing my <strong>
          master’s in digital signal processing at IIST Trivandrum</strong>, where
          machine learning, reinforcement learning, and my B.Tech
          signals-and-systems foundation meet. Still exploring where it leads,
          and enjoying the ride.
        </p>
      </Content>
    </Section>
  );
}

export default About;
