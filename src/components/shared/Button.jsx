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
    <Link
      to={to}
      target={target}
      className={`${buttonType} ${className} flex items-center justify-center `}
    >
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex items-center justify-center gap-2"
      >
        {text} {icon}
      </button>
    </Link>
  );
}

export default Button;
