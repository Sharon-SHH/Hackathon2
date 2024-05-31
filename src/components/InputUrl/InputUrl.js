import React from "react";
import { useState } from "react";
import axios from "axios";
import "../InputUrl/InputUrl.scss";
import Coloring from "../Coloring/Coloring";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function InputUrl() {
   const [colors, setColors] = useState([]);
   const [url, setUrl] = useState("");
   const [errMes, setErrMes] = useState("");

   const getData = async () => {
     try {
       const response = await axios.get(
         `${REACT_APP_SERVER_URL}/colors?url=${url}`
       );
       const tmpColors = response.data.result.colors.background_colors;
       setColors(tmpColors);
     } catch (error) {
       console.log(error);
       throw new Error("Couldn't download image.");
     }
   };
   const handleChange = (e) => {
     setUrl(e.target.value);
     setColors([]);
     setErrMes("");
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
      await getData();
      
     } catch (error) {
      console.log(error);
      setErrMes(error.message);
     }
     
   };

  return (
    <>
      <form className="input-url" id="myForm" onSubmit={handleSubmit}>
        <label className="input-url__text">Enter Image URL</label>
        <div className="input-url__wrapper">
          <div className="input-url__inputError">
            <input
              className="input-url__input"
              type="text"
              id="textInput"
              name="textInput"
              placeholder="Enter URL here"
              value={url}
              onChange={handleChange}
            />
            <p className="errorMes">{errMes}</p>
          </div>
          <button
            className="input-url__button"
            onSubmit={getData}
            type="submit"
          >
            Show Results!
          </button>
        </div>
      </form>
      <div className="App">
        {url && colors && <Coloring img_url={url} colors={colors} />}
      </div>
    </>
  );
}

export default InputUrl;
