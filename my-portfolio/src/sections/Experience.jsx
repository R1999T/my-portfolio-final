import { useState } from "react";
import Section from "../components/Section";
import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard";

const Timeline = styled.div`
  position: relative;

  width: 100%;
  max-width: 900px;

  margin: 0 auto;
  padding-left: 0;

  // &::before {
  //   content: "";

  //   position: absolute;

  //   left: 18px;
  //   top: 0;
  //   bottom: 0;

  //   width: 2px;

  //   background: rgba(255, 255, 255, 0.2);
  // }

  /* Mobile alignment */
  @media (max-width: 768px) {
    padding-left: 0;

    &::before {
      left: 12px;
    }
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
  margin-bottom: 32px;
}
`;

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="experience" hideDivider>

      <ExperienceContainer>

        <h1>EXPERIENCE</h1>

        <Timeline>

          <ExperienceCard
            isOpen={activeIndex === 0}
            onClick={() => setActiveIndex(0)}
            logo="/logos/LTIMindtree.png"
            role="Software Engineer"
            company="LTIMindtree"
            duration="July 2023 - Jan 2025"
            description={[
              "Developed workflows for BPMN image and document analysis and provided multi-model (LLMs) support using FastAPI and the LangChain framework, resulting in a 50–60% increase in productivity for Scrum Masters in document analysis and requirement creation.",
              "Worked on an Agentic AI workflow to automate the process from requirement generation to the creation of epics, features, and user stories, resulting in a productivity increase of up to 70%.",
              "Handled VM- and container-based deployment of frontend and backend services on AWS and GCP."
            ]}
          />
          <ExperienceCard isOpen={activeIndex === 1}
            onClick={() => setActiveIndex(1)}

            logo="/logos/LTIMindtree.png"
            role="Software Engineer"
            company="LTIMindtree"
            duration="July 2023 - Jan 2025"
            description={[
              "Developed workflows for BPMN image and document analysis and provided multi-model (LLMs) support using FastAPI and the LangChain framework, resulting in a 50–60% increase in productivity for Scrum Masters in document analysis and requirement creation.",
              "Worked on an Agentic AI workflow to automate the process from requirement generation to the creation of epics, features, and user stories, resulting in a productivity increase of up to 70%.",
              "Handled VM- and container-based deployment of frontend and backend services on AWS and GCP."
            ]} />



        </Timeline>

      </ExperienceContainer>


    </Section>
  );
}

export default Experience;