import styled from "styled-components";

const Section = styled.section`

  min-width: 100vw;
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  scroll-margin-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  
  padding-top: 40px;
padding-left: 40px;
padding-right: 40px;
padding-bottom: 60px;


  transition: all 0.3s ease;

`;

export default Section;


// overflow-y: hidden;
  // scroll-snap-align: start;