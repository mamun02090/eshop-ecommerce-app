import classes from "../styles/Form.module.css";

export default function Form({ children, className, action, onSubmit, method }) {
  return (
    <form className={`${className} ${classes.form}`} method={method} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
