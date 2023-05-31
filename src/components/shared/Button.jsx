import "../../assets/styles/button.css";

function Button({ text, buttonType, className, onClick }) {
  return (
    <button className={`${buttonType} ${className} `} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
