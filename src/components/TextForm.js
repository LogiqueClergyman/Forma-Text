import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    setText("");
  };
  const FirstLetter = () => {
    let array = text.split(" ");
    let newText="";
    array.forEach(element => {
      newText += (element.charAt(0));
    });
    console.log(newText);
    setText(newText);
  };
  const Capitalize = () => {
    let array = text.split(" ");
    let newText="";
    array.forEach(element => {
      newText += (element.charAt(0).toUpperCase() + element.substring(1) + " ");
    });
    console.log(newText);
    setText(newText.substring(0, newText.length-1));
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className={"container text-" + props.textColor}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myText" className={"form-label text-"}>
            Text Modification Website
          </label>
          <textarea
            className={
              "form-control border-1 border-" +
              props.textColor +
              " bg-" +
              props.mode +
              " text-" +
              props.textColor
            }
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text to convert"
          ></textarea>
          <button
            type="button"
            className="btn btn-outline-success my-2 mx-1"
            onClick={handleUpClick}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-outline-success my-2 mx-1"
            onClick={handleLoClick}
          >
            Lowercase
          </button>
          <button
            type="button"
            className="btn btn-outline-success my-2 mx-1"
            onClick={clearText}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-outline-success my-2 mx-1"
            onClick={Capitalize}
          >
            Capitalize
          </button>
          <button
            type="button"
            className="btn btn-outline-success my-2 mx-1"
            onClick={FirstLetter}
          >
            First Letters
          </button>
        </div>
      </div>
      <div className={"container text-" + props.textColor}>
        <h1>Your text summary</h1>
        <p>
          Your text has{" "}
          {text.split(" ").length > 1 ? text.split(" ").length - 1 : 0} words
          and {text.length} characters.
        </p>
        <p>
          {text.length > 0 ? 0.008 * text.split(" ").length : 0} minute read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
