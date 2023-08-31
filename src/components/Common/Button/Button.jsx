import styles from "./Button.module.scss";

// Button(Obj)
// Button({text,active,type,Onclick})

export function Button({ onClick, type, text, active = true }) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return (
    <button
      className={`${styles.btn} ${btnStyles}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
