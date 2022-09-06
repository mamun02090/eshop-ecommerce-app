import classes from "../styles/Form.module.css";

export default function Form({ children, className, action, onSubmit }) {
  return (
    <form className={`${className} ${classes.form}`} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
