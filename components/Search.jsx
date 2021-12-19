import styled from "styled-components";

//styled
const ContainerSearch = styled.div`
  margin: 3rem 4%;
  display: flex;
  background-color: var(--Elements);
  border-radius: 8px;
`;
const LabelIcon = styled.label`
  display: flex;
  align-items: center;
  margin: 0 3rem;
`;
const Input = styled.input`
  outline: none;
  border: 0;
  background-color: var(--Elements);
  padding: 2rem 0;
  color: var(--Text);
  font-size: 16px;
  &::placeholder {
    color: var(--Text);
    font-size: 16px;
  }
`;
const SearchCountry = () => {
  return (
    <ContainerSearch>
      <LabelIcon>
        <box-icon name="search" color="var(--Text)"></box-icon>
      </LabelIcon>
      <Input type="text" placeholder="Search for a country" />
    </ContainerSearch>
  );
};
export default SearchCountry;
