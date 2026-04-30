import styled from "styled-components";

function ExperienceCard({ logo, role, company, duration, description, isOpen, onClick }) {
  return (
    <Card onClick={onClick} isOpen={isOpen}>
      {/* <Dot /> */}

      <Header>
        <Logo src={logo} alt={company} />

        <div>
          <h3>{role}</h3>
          <p>{company}</p>
          <p>{duration}</p>
        </div>
         <RadioBtn isOpen={isOpen} />
      </Header>

      <DescriptionWrapper isOpen={isOpen}>
      <Description>
        {description &&
          description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </Description>

      </DescriptionWrapper>
    </Card>
  );
}

export default ExperienceCard;

const Description = styled.div`
  margin-top: 14px;

  color: rgba(255, 255, 255, 0.8);

  line-height: 1.6;
  font-size: 0.95rem;

  p {
    margin-bottom: 6px;
  }

  /* Mobile readability */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const RadioBtn = styled.span`
  margin-left: auto;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.3s ease;

  background: ${({ isOpen }) =>
    isOpen
      ? "linear-gradient(135deg, #6366f1, #06b6d4)"
      : "linear-gradient(white, white) padding-box, linear-gradient(135deg, #6366f1, #06b6d4) border-box"};
  border: ${({ isOpen }) => (isOpen ? "none" : "2px solid transparent")};
`;


const Header = styled.div`
  display: flex;
  align-items: flex-start;
   cursor: pointer;
  gap: 16px;

  /* Slightly tighter spacing on small phones */
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Logo = styled.img`
  width: 42px;
  height: 42px;

  object-fit: contain;

  border-radius: 8px;

  background: rgba(255, 255, 255, 0.06);

  padding: 6px;

  /* Mobile logo size */
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    padding: 5px;
  }
`;

const Card = styled.div`
  position: relative;

  width: 100%;
  box-sizing: border-box;
max-width: 100%;
min-width: 0;

  margin-left: 0;

  padding: 20px 24px;

  background: rgba(255, 255, 255, 0.05);

  backdrop-filter: blur(10px);

  border-left: 1px solid rgba(255, 255, 255, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  /* First card */
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  /* Last card */
  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      6px 6px 12px rgba(0, 0, 0, 0.25),
      -4px -4px 10px rgba(255, 255, 255, 0.04);
  }

  /* Mobile spacing */
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 16px 18px;
  }
`;

const DescriptionWrapper = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "600px" : "0px")};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;