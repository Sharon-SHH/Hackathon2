import React from "react";
import "./HomePage.scss"
import InputUrl from "../../components/InputUrl/InputUrl.js";
import Header from "../../components/Header/Header.js";
import Coloring from "../../components/Coloring/Coloring.js";
import { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function HomePage() {
  const [colors, setColors] = useState([]);
  const [url, setUrl] = useState("");
  
  const getData = async ()=> {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/colors?url=${url}`);
      const tmpColors = response.data.result.colors.background_colors;
      setColors(tmpColors);
    } catch(error) {
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setUrl(e.target.value);
    setColors([]);
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="home-page">
      <Header />
      <form className="input-url" id="myForm" onSubmit={handleSubmit}>
        <label className="input-url__text">Enter Image URL</label>
        <div className="input-url__wrapper">
          <input
            className="input-url__input"
            type="text"
            id="textInput"
            name="textInput"
            placeholder="Enter URL here"
            value={url}
            onChange={handleChange}
          />
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

      <footer className="footer">
        <p className="footer__copyright">Copyright from Bugbusters</p>
      </footer>
    </div>
  );
}

export default HomePage;
