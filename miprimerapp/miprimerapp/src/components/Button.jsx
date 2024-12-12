export default function Button(props) {
  const { text, color, disabled, children } = props;

  const displayText = children === undefined ? text : children;

  return (
    <button disabled={disabled} className={`btn-${color}`}>
      {props.text}
    </button>
  );
}
