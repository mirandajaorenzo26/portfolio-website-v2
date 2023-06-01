import { Link } from "react-router-dom";
import "../../assets/styles/button.css";

function Button({
  text,
  buttonType,
  icon,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  to,
  target,
}) {
  return (
    <Link to={to} target={target}>
      <button
        className={`${buttonType} ${className} flex items-center justify-center gap-2`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text} {icon}
      </button>
    </Link>
  );
}

export default Button;
