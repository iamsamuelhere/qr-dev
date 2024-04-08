const TextArea = ({ placeholder, name, value, onChange, type,styles={} }) => {
    return (
      <textarea
        required
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: '10px', display: 'block', margin: '10px' }}
        type={type}
        {...styles}
      />
    );
  };
  
  export default TextArea;
  