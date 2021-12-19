import Nav from "../components/Nav";
import SearchCountry from "../components/Search";
import Select from "../components/Select";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;
const IndexLayaut = (props) => {
  return (
    <>
      <Nav />
      <SearchCountry />
      <Select />
      <Main>{props.children}</Main>
    </>
  );
};

export default IndexLayaut;
