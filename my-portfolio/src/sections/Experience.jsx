import Section from "../components/Section";
import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard";

const Timeline = styled.div`
  position: relative;

  width: 100%;
  max-width: 900px;

  margin: 0 auto;
  padding-left: 40px;

  &::before {
    content: "";

    position: absolute;

    left: 18px;
    top: 0;
    bottom: 0;

    width: 2px;

    background: rgba(255, 255, 255, 0.2);
  }

  /* Mobile alignment */
  @media (max-width: 768px) {
    padding-left: 28px;

    &::before {
      left: 12px;
    }
  }
`;

function Experience() {
  return (
    <Section id="experience">

      <Timeline>

        <ExperienceCard 
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

      </Timeline>

    </Section>
  );
}

export default Experience;