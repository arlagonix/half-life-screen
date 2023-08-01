import classes from "./index.module.scss";
import clsx from "clsx";

interface CheckboxProps {
  /** If `true`, the checkbox is checked */
  isChecked: boolean;
  /** `onChange` handler */
  changeHandler: () => void;
  /** Label that describes what the checkbox is for */
  label: string;
  /** Custom CSS class applied in addition to the default styles */
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  changeHandler,
  label,
  className,
}) => {
  return (
    <label className={clsx(classes.checkboxWrapper, className)}>
      <input type="checkbox" checked={isChecked} onChange={changeHandler} />
      <span className={classes.checkmark}></span>
      <p>{label}</p>
    </label>
  );
};

export default Checkbox;
