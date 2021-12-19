import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
const ContainerSelect = styled.div`
  margin: 3rem 4%;
  border-radius: 8px;
  width: 20rem;
  padding: 1.5rem 3rem;
  background-color: var(--Elements);
  color: var(--Text);
  position: relative;
  z-index: 1000;
`;
const J = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Selection = styled(ContainerSelect)`
  position: absolute;
  margin: 2.5rem 0 0 0;
  left: 0;
  padding: 1rem 0;
  display: ${(props) => props.activeItem};
`;
const SelectOption = styled.div`
  padding: 5px 3rem;
  color: var(--Text);
`;
const Select = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [item, setItem] = useState("Select a country");
  const viewList = () => {
    setActive(!active);
  };
  const handleItem = (e) => {
    const id = e.target.id;
    setItem(id);
    if (id === "All") {
      router.push("/");
    } else {
      router.push(`/${id}`);
    }
  };
  return (
    <ContainerSelect onClick={viewList}>
      <J>
        <span>{item}</span>
        <box-icon
          name={!active ? "chevron-down" : "chevron-up"}
          color="var(--Text)"
        ></box-icon>
      </J>
      <Selection activeItem={active ? "inline" : "none"}>
        <SelectOption onClick={handleItem} id="all">
          All
        </SelectOption>
        <SelectOption onClick={handleItem} id="africa">
          Africa
        </SelectOption>
        <SelectOption onClick={handleItem} id="america">
          America
        </SelectOption>
        <SelectOption onClick={handleItem} id="asia">
          Asia
        </SelectOption>
        <SelectOption onClick={handleItem} id="europe">
          Europe
        </SelectOption>
        <SelectOption onClick={handleItem} id="oceania">
          Oceania
        </SelectOption>
      </Selection>
    </ContainerSelect>
  );
};

export default Select;