const SplitScreen = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        width: "100%",
        height: "100vh",
        overflowX: "auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default SplitScreen;
