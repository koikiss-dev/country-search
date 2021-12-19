import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";

const ContainerCard = styled.div`
  background-color: var(--Elements);
  width: 100%;
  border-radius: 8px;
  color: var(--Text);
  margin: 2rem 3rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Header = styled.header``;
const Country = styled.h3``;
const Aside = styled.aside`
  padding: 1rem 3rem 5rem 3rem;
`;
const ContainerInfo = styled.div``;
const IndexData = styled.p``;
const DataIndex = styled.span``;
const CardMain = ({ flag, country, population, region, capital }) => {
  return (
    <ContainerCard>
      <Image
        src={flag}
        alt={country}
        width="400"
        height="200"
        quality="90"
        priority
        placeholder="blur"
        blurDataURL
      />
      <Aside>
        <Header>
          <Country>{country}</Country>
        </Header>
        <ContainerInfo>
          <IndexData>Population: {population}</IndexData>
        </ContainerInfo>
        <ContainerInfo>
          <IndexData>Region: {region}</IndexData>
        </ContainerInfo>
        <ContainerInfo>
          <IndexData>Capital: {capital}</IndexData>
        </ContainerInfo>
      </Aside>
    </ContainerCard>
  );
};

CardMain.propTypes = {
  flag: PropTypes.string,
  country: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.array,
};

export default CardMain;
