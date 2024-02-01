import React from "react";
import "../InputUrl/InputUrl.scss";

function InputUrl() {
  return (
    <form className="input-url">
      <label className="input-url__text">Enter Image URL</label>
      <input
        className="input-url__input"
        type="text"
        placeholder="enter URL here"
      />
      <button className="input-url__button">Show Results!</button>
    </form>
  );
}

export default InputUrl;
