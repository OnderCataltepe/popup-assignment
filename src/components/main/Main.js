import { useSelector } from "react-redux";
import "./main.scss";
import Popup from "./popup/Popup";
import Success from "./success/Success";
const Main = () => {
  const isSubmitted = useSelector((state) => state.form.isSubmitted);
  return (
    <div id="popMainUp">
      <div>{isSubmitted ? <Success /> : <Popup />}</div>
    </div>
  );
};
export default Main;
