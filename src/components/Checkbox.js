export default function Checkbox({label, ...rest}) {
  return (
    <label  >
      <input type="checkbox" {...rest}/>
      <span> {label}</span>
    </label>
  );
}
