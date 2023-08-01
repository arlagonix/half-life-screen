import classes from "./index.module.scss";
import clsx from "clsx";

interface ButtonProps {
  /** Callback that defines what's gonna happen when the button is clicked */
  clickHandler?: () => void;
  /** React elements that are children to the component */
  children?: React.ReactNode;
  /** Inline CSS styles */
  style?: React.CSSProperties;
  /** If `true` the button is disabled, nothing happens when you press it */
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  clickHandler,
  children,
  style,
  disabled,
}) => {
  return (
    <button
      onClick={disabled ? undefined : clickHandler}
      className={clsx(classes.button, disabled && classes.disabled)}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
