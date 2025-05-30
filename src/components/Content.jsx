import styled from "styled-components";
import { FlexMixin, FontStyle, gray, tagColor } from "../styled/styled";

const ContentContainer = styled.div`
  ${FlexMixin("column", undefined, "flex-start", "5px")}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${FontStyle("12px")}
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${FontStyle("18px", 600)}
  }
  p {
    ${FontStyle("12px")}
    color: ${gray};
  }
`

export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
