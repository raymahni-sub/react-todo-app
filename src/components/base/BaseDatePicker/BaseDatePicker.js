import "./BaseDatePicker.css";

function BaseDatePicker(props) {
  return (
    <div className="Input-date-picker w-100 m-b-6">
      {props.hideTitle ? null : <p className="Title">{props.title}</p>}
      <input type="date" />
    </div>
  );
}

export default BaseDatePicker;
