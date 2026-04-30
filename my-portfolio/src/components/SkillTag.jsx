import styled from "styled-components";

const Tag = styled.span`
  padding: 10px 20px;
  border-radius: 1px;
  background: #2a2a2a;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: #333;
  }
`;

function SkillTag({ name }) {
  return <Tag>{name}</Tag>;
}

export default SkillTag;