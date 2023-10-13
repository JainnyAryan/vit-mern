import React, { useState } from "react";

const WordCounter = () => {
  const [count, setCount] = useState(0);
  const countWords = (val) => {
    var str = val.target.value;
    setCount(str.split(" ").length);
  };

  return (
    <div
      className="container"
      style={{
        boxShadow: "0px 0px 20px rgba(0,0,0, 0.6)",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <p>Responsive Paragraph Word Counter</p>
      <textarea
        id="paragraph"
        cols="30"
        rows="7"
        onChange={countWords}
      ></textarea>
      <div>Word count : {count.toString()}</div>
    </div>
  );
};

export default WordCounter;
