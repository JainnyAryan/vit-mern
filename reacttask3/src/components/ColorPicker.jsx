import "../styles/ColorPicker.css";

var ColorPicker = (props) => {
  return (
    <span
      style={{
        display: props.visibility ? "flex" : "none",
        flexDirection: "row",
      }}
    >
      {props.colors.map((color) => {
        return (
          <button
            style={{ backgroundColor: color }}
            onClick={() => props.setColor(color)}
          ></button>
        );
      })}
    </span>
  );
};

export default ColorPicker;
