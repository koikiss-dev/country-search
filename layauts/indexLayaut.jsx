import Nav from "../components/Nav";
const IndexLayaut = (props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default IndexLayaut;
