import './popup.scss';
import Form from './form/Form';
import { useSelector } from 'react-redux';

const Popup = () => {
  const { description, headline } = useSelector((state) => state.form);
  return (
    <div className="card">
      <button onClick={() => alert('Not working for this demo.')}>+</button>
      <h2>{headline}</h2>
      <p>{description}</p>
      <Form />
    </div>
  );
};

export default Popup;
