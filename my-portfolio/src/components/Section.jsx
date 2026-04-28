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

position: relative;

&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}


  transition: all 0.3s ease;

`;

export default Section;


// overflow-y: hidden;
  // scroll-snap-align: start;