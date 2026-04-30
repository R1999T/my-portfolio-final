import Section from "../components/Section";
import styled from "styled-components";
import SkillTag from "../components/SkillTag";

const Content = styled.div`


  text-align: center;
  max-width: 900px;
  margin: 0 auto; 
  padding-bottom: 200px;

h1 { line-height: 1.4; color: white; }


h2 {
  margin-bottom: 24px;
}

h3 { margin-top: 28px; margin-bottom: 8px; color: rgba(255,255,255,0.6); }

@media (max-width: 768px) {
  h1 {
    font-size: 1.6rem;
    line-height: 1.4;
  }
}

`;

const Category = styled.div`

  margin-top: 32px;

`;

const TagContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
  justify-content: center;
  

`;

function Skills() {
  return (
    <Section id="skills"  style={{ 
  background: "#1a1a1a",
  maxWidth: "100%",
  width: "100%"
}}>

      <Content>

        <h1>Technologies I have worked on:</h1>

        <Category>

          <h3>Programming Languages</h3>

          <TagContainer>

            <SkillTag name="Python" />
            <SkillTag name="C"  />
            <SkillTag name="Verilog"/>


          </TagContainer>

        </Category>

        <Category>

          <h3>Tools & Frameworks</h3>

          <TagContainer>

            <SkillTag name="Git"  />
            <SkillTag name="Linux"  />
            <SkillTag name="FastAPI"  />
            <SkillTag name="CI/CD"/>

            <SkillTag name="React"  />
            <SkillTag name="Node.js"  />
            <SkillTag name="VS Code" />

          </TagContainer>

        </Category>



        <Category>

          <h3>Cloud Platforms</h3>

          <TagContainer>

            <SkillTag name="AWS" />
            <SkillTag name="Microsoft Azure" />
            <SkillTag name="GCP" />

          </TagContainer>

        </Category>

      </Content>

    </Section>
  );
}

export default Skills;