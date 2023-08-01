import Draggable from "react-draggable";
import classes from "./index.module.scss";
import closeIcon from "../../assets/icons/close.svg";

interface ModalProps {
  /** Modal header, it's displayed at the top of the modal */
  header: string;
  /** React children nodes */
  children?: React.ReactNode;
  /**
   * If `true`, the close icon is displayed at the top right corner.
   * Is usually used in combination with `clickHandler` to close the modal.
   * Is used to define custom content for the modal.
   */
  hasCloseIcon?: boolean;
  /**
   * Custom inline styles passed to the modal container.
   * This prop is usually used to define custom `width` or `minWidth`
   */
  style?: React.CSSProperties;
  /** `onClick` handler. Is usually used to close the modal */
  clickHandler?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  header,
  children,
  hasCloseIcon = false,
  style,
  clickHandler,
}) => {
  return (
    <Draggable handle="strong">
      <section
        className={classes.wrapper}
        style={{
          display: "flex",
          flexDirection: "column",
          ...style,
        }}
      >
        <strong>
          {hasCloseIcon === false ? (
            <h2 className={classes.header}>{header}</h2>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2 className={classes.header}>{header}</h2>
              <button onClick={clickHandler} className={classes.closeButton}>
                <img src={closeIcon} width={16} height={16} />
              </button>
            </div>
          )}
        </strong>
        {children}
      </section>
    </Draggable>
  );
};

export default Modal;
