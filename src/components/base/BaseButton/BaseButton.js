import "./BaseButton.css";

function BaseButton(props) {
  return (
    <div className={`Base-button ${props.extraClass}`}>
      <button type={props.type} disabled={props.disabled}>
        {props.title}
      </button>
    </div>
  );
}

export default BaseButton;
