import React from "react";
import "./HomePage.scss"
import InputUrl from "../../components/InputUrl/InputUrl.js";
import Hero from "../../components/Hero/Hero.js";
import Header from "../../components/Header/Header.js";
import Coloring from "../../components/Coloring/Coloring.js";
import { useEffect, useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function HomePage() {
  const [colors, setColors] = useState([]);
  const [url, setUrl] = useState("https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg");
  const myForm = document.getElementById("myForm");
  
  const getData = async ()=> {
    // event.preventDefault();
    try {
      console.log(url);
      const response = await axios.get(`${REACT_APP_SERVER_URL}/colors?url=${url}`);
      const tmpColors = response.data.result.colors.background_colors;
      setColors(tmpColors);
      console.log(colors);
    } catch(error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    console.log("init");
    getData();
  }, [url]);

  return (
    <div className="home-page">
      <Header />
      <Hero />
      <form className="input-url" id="myForm" type="submit">
        <label className="input-url__text">Enter Image URL</label>
        <input
          className="input-url__input"
          type="text"
          name="inputUrl"
          placeholder="enter URL here"
        />
        <button
          className="input-url__button"
          onSubmit={
            getData
          }
          type="submit"
        >
          Show Results!
        </button>
      </form>
      <div className="App">
        <Coloring img_url={url} colors={colors} />
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default HomePage;
