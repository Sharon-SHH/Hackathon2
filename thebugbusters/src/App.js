import { useEffect, useState } from "react";
import axios from "axios";
import Coloring from "./components/Coloring/Coloring";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [colors, setColors] = useState([]);
  const url = "https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg";
  const getData = async ()=> {
    try {
      console.log(REACT_APP_SERVER_URL);
      const response = await axios.get(`${REACT_APP_SERVER_URL}/colors?url=${url}`);
      const tmpColors = response.data.result.colors.background_colors;
      setColors(tmpColors);
      console.log(tmpColors);
      console.log(colors);
    } catch(error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getData();
  }, [url]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
