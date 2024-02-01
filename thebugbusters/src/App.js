import { useEffect, useState } from "react";
import axios from "axios";
import Coloring from "./Coloring/Coloring";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

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
    <div className="App">
      <header className="App-header">
        {/* new line start*/}
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        <Coloring img_url={url} colors={colors}/>
        {/* end of new line */}
      </header>
    </div>
  );
}

export default App;
