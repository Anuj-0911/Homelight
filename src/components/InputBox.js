import React from "react";
import Button from "./Button";

const InputBox = ({ placeholder, text, classes }) => {
  return (
    <div
      className={`d-flex justify-content-between my-4 input-box-container shadow ${classes}`}
    >
      <input
        type="text"
        className="ml-2 flex-fill"
        style={{ border: "none", fontSize: "1.1rem" }}
        placeholder={placeholder}
      />
      <Button text={text} />
    </div>
  );
};

export default InputBox;
