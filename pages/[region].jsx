import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CardMain from "../components/CardMain";
import IndexLayaut from "../layauts/indexLayaut";
import { restCountry } from "../apiconfig/countryApi";
import LoaderComp from "../components/LoaderComp";
import Countrys from "../context/countrys";
const Europe = () => {
  const router = useRouter();
  const { region } = router.query;
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  const getData = async (regionName) => {
    try {
      setLoader(true);
      const { data } = await restCountry(`/region/${regionName}`);
      const result = await data;
      setLoader(false);
      setCountry(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(region);
  }, [region]);
  return (
    <Countrys.Provider value={country}>
      <IndexLayaut>
        <Head>
          <title>Country | {region} </title>
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

export default Europe;
