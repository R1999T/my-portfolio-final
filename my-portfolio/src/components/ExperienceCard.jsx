import styled from "styled-components";

function ExperienceCard({ logo, role, company, duration, description }) {
  return (
    <Card>
      <Dot />

      <Header>
        <Logo src={logo} alt={company} />

        <div>
          <h3>{role}</h3>
          <p>{company}</p>
          <p>{duration}</p>
        </div>
      </Header>

      <Description>
        {description &&
          description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </Description>
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

const Header = styled.div`
  display: flex;
  align-items: flex-start;
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

  margin-left: 48px;

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
    margin-left: 28px;
    padding: 16px 18px;
  }
`;

const Dot = styled.div`
  position: absolute;

  left: -36px;   /* Desktop alignment */

  top: 26px;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: white;

  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.08);

  /* Mobile alignment */
  @media (max-width: 768px) {
    left: -24px;
  }
`;