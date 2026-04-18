import styled from "styled-components";

const Tag = styled.span`

  padding: 6px 12px;

  border-radius: 999px;

  font-size: 14px;

  font-weight: 500;

  background: ${({ color }) => color || "#444"};

  color: white;

  display: inline-block;

`;

function SkillTag({ name, color }) {
  return <Tag color={color}>{name}</Tag>;
}

export default SkillTag;