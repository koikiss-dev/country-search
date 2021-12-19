import styled from "styled-components";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const handleLink = (e) => {
    const value = e.target.value;
    if (value !== "") {
      router.push(`/search/${value}`);
      value = "";
    }
  };
  return (
    <ContainerSearch>
      <LabelIcon>
        <box-icon name="search" color="var(--Text)"></box-icon>
      </LabelIcon>
      <Input
        onKeyUp={(event) => (event.key === "Enter" ? handleLink(event) : null)}
        type="text"
        placeholder="Search for a country"
      />
    </ContainerSearch>
  );
};
export default SearchCountry;
