import { useEffect, useState } from "react";
import CardMain from "../components/CardMain";
import Head from "next/head";
import IndexLayaut from "../layauts/indexLayaut";
import { restCountry } from "../apiconfig/countryApi";
import LoaderComp from "../components/LoaderComp";
import Countrys from "../context/countrys";
const Home = () => {
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  const getData = async () => {
    try {
      setLoader(true);
      const { data } = await restCountry("/all");
      const result = await data;
      setLoader(false);
      setCountry(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Countrys.Provider value={country}>
      <IndexLayaut>
        <Head>
          <title>Country</title>
        </Head>
        {loader ? <LoaderComp /> : null}

        {country.map(({ name, flags, capital, population, region }) => {
          const official = name.official;
          const keyData = name.common;
          const capitalCity = capital;
          const flagsImage = flags.svg;
          return (
            <CardMain
              key={keyData}
              country={official}
              flag={flagsImage}
              population={population}
              capital={capitalCity}
              region={region}
            />
          );
        })}
      </IndexLayaut>
    </Countrys.Provider>
  );
};
export default Home;
