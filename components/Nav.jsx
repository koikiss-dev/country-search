import { useState } from "react";
import styled from "styled-components";
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--Elements);
`;
const Title = styled.h1``;
const DarkContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;
const Icon = styled.input`
  position: absolute;
  opacity: 0;
  transform: scale(1.5);
`;
const Dark = styled.span``;
const Nav = () => {
  const [darkMode, setDarkMode] = useState("moon");
  const v = (e) => {
    let checked = e.target.checked;
    if (checked) {
      document.documentElement.setAttribute("data-theme", "light");
      setDarkMode("sun");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode("moon");
    }
  };
  return (
    <NavContainer>
      <Title>Where in the world?</Title>
      <DarkContainer>
        <ContainerIcon>
          <Icon onClick={v} type="checkbox" name="" id="" />
          <box-icon type="solid" name={darkMode} color="var(--Text)"></box-icon>
        </ContainerIcon>
        <Dark>Dark Mode</Dark>
      </DarkContainer>
    </NavContainer>
  );
};

export default Nav;
