import Section from "../components/Section";
import styled from "styled-components";
import SkillTag from "../components/SkillTag";

const Content = styled.div`


  text-align: center;
  max-width: 900px;
  margin: 0 auto; 

  h1 {
  line-height: 1.4;
}


h2 {
  margin-bottom: 24px;
}

h3 {
  margin-top: 28px;
  margin-bottom: 10px;
}
h3 {
  margin-top: 28px;
  margin-bottom: 8px;
}

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
    <Section id="skills">

      <Content>

        <h1>Technologies I have been working with recently:</h1>

        <Category>

          <h3>Programming Languages</h3>

          <TagContainer>

            <SkillTag name="Python" color="#3776AB" />
            <SkillTag
              name="JavaScript"
              color="#F7DF1E"
              textColor="black"
            />
            <SkillTag name="C" color="#00599C" />
            <SkillTag name="Verilog" color="#8E44AD" />

          </TagContainer>

        </Category>

        <Category>

          <h3>Tools & Frameworks</h3>

          <TagContainer>

            <SkillTag name="Git" color="#d1391e" />
            <SkillTag name="Linux" color="#FCC624" textColor="black" />
            <SkillTag name="VS Code" color="#007ACC" />
            <SkillTag name="FastAPI" color="#b1c1c5" />
            <SkillTag name="React" color="#61DAFB" />
            <SkillTag name="Node.js" color="#339933" />

          </TagContainer>

        </Category>



        <Category>

          <h3>Cloud Platforms</h3>

          <TagContainer>

            <SkillTag name="AWS" color="#b34e35" />
            <SkillTag name="Microsoft Azure" color="#096194" />
            <SkillTag name="GCP" color="#00d3d3" />

          </TagContainer>

        </Category>

      </Content>

    </Section>
  );
}

export default Skills;