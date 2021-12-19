import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardMain from "../components/CardMain";
import IndexLayaut from "../layauts/indexLayaut";
import { restCountry } from "../apiconfig/countryApi";
const Europe = () => {
  const router = useRouter();
  const { region } = router.query;
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  const getData = async () => {
    try {
      setLoader(true);
      const { data } = await restCountry(`/region/${region}`);
      const result = await data;
      setLoader(false);
      setCountry(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [region]);
  return (
    <IndexLayaut>
      {loader ? (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <box-icon
            name="loader-alt"
            animation="spin"
            color="var(--Text)"
            size="lg"
          ></box-icon>
        </div>
      ) : null}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </main>
    </IndexLayaut>
  );
};

export default Europe;
