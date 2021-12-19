const LoaderComp = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1000",
        top: "24%",
        left: "50%",
        right: "50%",
      }}
    >
      <box-icon
        name="loader-alt"
        animation="spin"
        color="var(--Text)"
        size="lg"
      ></box-icon>
    </div>
  );
};

export default LoaderComp;
