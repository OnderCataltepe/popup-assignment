import warning from "../../assets/warning.png";

const ErrorMessage = ({ message = "" }) => {
  return (
    message !== "" && (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img alt="warning" src={warning} />
        <p style={{ fontSize: "1.2rem", color: "#EA0F0F", marginLeft: "2px" }}>
          {message}
        </p>
      </div>
    )
  );
};

export default ErrorMessage;
