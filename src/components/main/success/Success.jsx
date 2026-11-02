import "./success.scss";
import success from "../../../assets/success.png";
import { useSelector } from "react-redux";
const Success = () => {
  const successMessage = useSelector((state) => state.form.successMessage);
  return (
    <div className="card">
      <img alt="success" src={success} />
      <h2>{successMessage}</h2>
    </div>
  );
};

export default Success;
