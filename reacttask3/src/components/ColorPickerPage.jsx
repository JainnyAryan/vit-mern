import ColorPicker from "./ColorPicker";
import Button from "./Button";
import "../styles/ColorPickerPage.css";
import { useState } from "react";

var ColorPickerPage = () => {
  const [colorsVisible, setColorsVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const showColors = () => {
    setColorsVisible(true);
  };

  const setColor = (color) => {
    setSelectedColor(color);
    setColorsVisible(false);
  };
  const colors = [
    "#FF5733", // Orange
    "#33FF57", // Green
    "#3366FF", // Blue
    "#FF33B8", // Pink
    "#331F33", // Yellow
    "#3399FF", // Light Blue
    "#9933FF", // Purple
    "#33FFAA", // Turquoise
    "#FF3366", // Red
    "#33CCFF", // Sky Blue
  ];
  return (
    <div className="container">
      <ColorPicker
        colors={colors}
        visibility={colorsVisible}
        setColor={setColor}
      />
      <Button onClick={showColors} selectedColor={selectedColor} />
    </div>
  );
};

export default ColorPickerPage;
