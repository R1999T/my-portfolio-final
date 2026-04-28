import styled from "styled-components";

const Tag = styled.span`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background: #1a1a1a;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: default;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

function SkillTag({ icon: Icon, fallback }) {
  return (
    <Tag title={fallback}>
      {Icon ? <Icon /> : <span style={{ fontSize: "12px", fontWeight: 600 }}>{fallback}</span>}
    </Tag>
  );
}

export default SkillTag;