import Section from "../components/Section";
import styled from "styled-components";
import SkillTag from "../components/SkillTag";

const Content = styled.div`


  text-align: center;
  max-width: 900px;
  margin: 0 auto; 


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

        <h2>Technologies I have been working with recently:</h2>

        <Category>

          <h3>Programming Languages</h3>

          <TagContainer>

            <SkillTag name="Python" color="#3776AB" />

            <SkillTag name="JavaScript" color="#F7DF1E" />

            <SkillTag name="C" color="#00599C" />

            <SkillTag name="Verilog" color="#8E44AD" />

          </TagContainer>

        </Category>

        <Category>

          <h3>Tools & Technologies</h3>

          <TagContainer>

            <SkillTag name="Git" color="#F05032" />

            <SkillTag name="Linux" color="#FCC624" />

            <SkillTag name="VS Code" color="#007ACC" />

            <SkillTag name="React" color="#61DAFB" />

            <SkillTag name="Node.js" color="#339933" />

          </TagContainer>

        </Category>



        <Category>

          <h3>Core Subjects</h3>

          <TagContainer>

            <SkillTag name="Digital Electronics" color="#8E44AD" />

            <SkillTag name="Signal Processing" color="#16A085" />

            <SkillTag name="Embedded Systems" color="#D35400" />

            <SkillTag name="Microprocessors" color="#2C3E50" />

          </TagContainer>

        </Category>

      </Content>

    </Section>
  );
}

export default Skills;