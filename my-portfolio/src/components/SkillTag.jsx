import styled from "styled-components";

const Tag = styled.span`

  padding: 5px 12px;
  font-size: 12.5px;

  border-radius: 1px;
  white-space: nowrap;
min-height: 28px;

display: inline-flex;

align-items: center;

justify-content: center;


  font-weight: 600;

  letter-spacing: 0.5px;

  background: ${({ color }) => color || "#444"};

  color: ${({ textColor }) => textColor || "white"};


`;

function SkillTag({ name, color,textColor }) {
  return <Tag color={color} textColor={textColor}>{name}</Tag>;
}

export default SkillTag;