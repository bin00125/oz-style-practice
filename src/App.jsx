import styled from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { FlexMixin } from "./styled/styled";

const SectionStyled = styled.section`
  ${FlexMixin(undefined, "center", "center", "20px", "wrap")}
  padding: 20px 40px;
`

function App() {
  return (
    <main>
      <Header />
      <SectionStyled>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </SectionStyled>
    </main>
  );
}

export default App;
