const Button = ({ title, onClick, styles = {} }) => {
  console.log('St', styles);
  return (
    <button
      type="submit"
      style={{ padding: '7px', ...styles }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
