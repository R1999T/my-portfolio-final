import styled from "styled-components";

const Section = styled.section`
  width: 100%;
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

  position: relative;

&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 4px;
  background: linear-gradient(
    90deg,
    #6366f1,
    #06b6d4
  );
}
`;  

export default Section;


// overflow-y: hidden;
  // scroll-snap-align: start;