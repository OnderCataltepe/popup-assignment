const TextArea = ({
  placeholder = "",
  label = "",
  value,
  onChange,
  name,
  rows,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
