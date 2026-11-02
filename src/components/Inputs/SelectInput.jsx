import { forwardRef } from 'react';
import Select from 'react-select';

const SelectInput = forwardRef(({ options, onChange, name }, ref) => {
  const values = options;
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: '#ededed',
      fontSize: '1.4rem',
      textAlign: 'left',

      borderRadius: 0,
      border: state.isFocused ? '0.2rem solid #76ac01' : 'none',
      outlineColor: '#76ac01',
      boxShadow: state.isFocused ? null : null,
      '&:hover': {}
    }),
    option: (provided, state) => ({
      ...provided,

      borderBottom: '1px solid #585b68',
      color: 'black',

      fontSize: '1.4rem',
      textAlign: 'left',
      background: '#ededed',
      '&:hover': {
        background: '#585B68',
        color: '#fff'
      }
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0
    })
  };

  return (
    <>
      {options.length > 0 && (
        <Select
          ref={ref}
          name={name}
          onChange={onChange}
          options={values}
          styles={customStyles}
          placeholder="Select Fonts"
        />
      )}
    </>
  );
});

export default SelectInput;
