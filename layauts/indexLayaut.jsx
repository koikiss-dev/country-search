import Nav from "../components/Nav";
import SearchCountry from "../components/Search";
import Select from "../components/Select";

const IndexLayaut = (props) => {
  return (
    <>
      <Nav />
      <SearchCountry />
      <Select />
      {props.children}
    </>
  );
};

export default IndexLayaut;
