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
            alignItems: "center" 
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
                borderRadius: "50%"
              }}
            />
          </div>

          <div
            className="hero-text"
            style={{
              maxWidth: "500px",
              lineHeight: "1.5",
              alignItems: "center" 
            }}
          >
            <h1 style={{ marginBottom: "10px" }}>
              HOLA! I'm RAGHAV TIWARI
            </h1>
            <h2 style={{ marginBottom: "10px", fontWeight: "normal" }}>
              Aspiring VLSI / Hardware Engineer
            </h2>

            <a
              href="/files/rt_resume.pdf"
              download
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* About content */}
        {/* Divider */}
        <hr style={{
          width: "100%",
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "80px",
          marginBottom: "40px"
        }} />
        <h1 style={{ marginTop: "60px" }}>About Me!</h1>
        <p>
          I hold a Bachelor of Technology in Electronics and Communication Engineering, where I built a strong academic foundation in core areas such as digital electronics, electronic devices and circuits, signal processing, control systems, and communication systems. These studies developed my understanding of electronic system design and analysis and fostered my long-term interest in the field of electronics.

          Following my undergraduate studies, I worked as a Software Engineer for one year, gaining hands-on experience in Python backend development using FastAPI, automation workflows, and container-based deployment on cloud platforms. This role strengthened both my technical capabilities and professional skills, including collaboration, problem-solving, and adaptability in a structured work environment.

          Driven by a clear interest in core electronics, I chose to transition from software development to focus on advancing my expertise in the electronics domain. I am now preparing to pursue a Master’s degree (M.Tech) to deepen my knowledge in areas such as embedded systems, signal processing, and related technologies. My goal is to develop the technical proficiency required to contribute effectively to the semiconductor and electronics industry and build a stable, long-term career in this field.
        </p>

      </Content>
    </Section >
  );
}

export default About;