const Input = ({ placeholder, name, value, onChange, type }) => {
  return (
    <input
      required
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      style={{ padding: '10px', display: 'block', margin: '10px' }}
      type={type}
    />
  );
};

export default Input;
