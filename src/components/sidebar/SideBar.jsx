import "./sideBar.scss";

import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import { useSelector, useDispatch } from "react-redux";
import { onChangeInputs } from "../../store/reducers/formSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { description, headline, successMessage } = useSelector(
    (state) => state.form
  );

  return (
    <div id="popSideUpSmart">
      <h2>General Settings</h2>
      <Input
        label="Headline"
        name="headline"
        value={headline}
        onChange={(e) =>
          dispatch(
            onChangeInputs({ type: e.target.name, value: e.target.value })
          )
        }
      />
      <TextArea
        label="Description"
        name="description"
        rows={4}
        onChange={(e) =>
          dispatch(
            onChangeInputs({ type: e.target.name, value: e.target.value })
          )
        }
        value={description}
      />
      <Input
        label="Success Message"
        name="successMessage"
        onChange={(e) =>
          dispatch(
            onChangeInputs({ type: e.target.name, value: e.target.value })
          )
        }
        value={successMessage}
      />
    </div>
  );
};

export default SideBar;
