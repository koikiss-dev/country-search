import Nav from "../components/Nav";
import SearchCountry from "../components/Search";

const IndexLayaut = (props) => {
  return (
    <>
      <Nav />
      <SearchCountry />
      {props.children}
    </>
  );
};

export default IndexLayaut;
