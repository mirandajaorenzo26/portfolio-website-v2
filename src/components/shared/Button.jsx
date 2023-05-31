function Button({ text, buttonType, className, onClick }) {
  return (
    <button className={`${buttonType} ${className} `} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
