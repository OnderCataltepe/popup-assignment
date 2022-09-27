import { forwardRef } from "react";
const Input = forwardRef(
  (
    { placeholder = " ", label = "", value, type = "text", onChange, name },
    ref
  ) => {
    return (
      <>
        {label.length > 0 && <label htmlFor={name}>{label}</label>}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
);

export default Input;
