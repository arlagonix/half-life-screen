import classes from "./index.module.scss";
import clsx from "clsx";

interface RadioButtonProps {
  /** If `true` the checkbox is checked */
  isChecked: boolean;
  /** Callback that updates the checkbox state `onChange`*/
  changeHandler: () => void;
  /** Label displayed near the checkbox */
  label: string;
  /** Custom class applied in addition to the default styles */
  className?: string;
  /** `name` parameter for `input`. Is used to group radio buttons */
  radioName: string;
  /**
   * `value` parameter for `input`.
   * Not sure if there is any point to use it, because I handle everything in `onChange`
   */
  radioValue: string;
}

const Radiobutton: React.FC<RadioButtonProps> = ({
  isChecked,
  changeHandler,
  label,
  className,
  radioName,
  radioValue,
}) => {
  return (
    <label className={clsx(classes.radiobuttonWrapper, className)}>
      <input
        type="radio"
        name={radioName}
        checked={isChecked}
        onChange={changeHandler}
        value={radioValue}
      />
      <span className={classes.bullet}></span>
      <p>{label}</p>
    </label>
  );
};

export default Radiobutton;
