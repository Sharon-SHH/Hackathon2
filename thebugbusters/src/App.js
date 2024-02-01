import { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const [colors, setColors] = useState(null);
  
  const getData = async ()=> {
    try {
      console.log(REACT_APP_SERVER_URL);
      const response = await axios.get(`${REACT_APP_SERVER_URL}/profile`);
      console.log(response);

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* new line start*/}
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        {colors && (
          <div>
            <p>Color Name: {colors.color_name}</p>
            <p>Color Parent: {colors.color_parent}</p>
          </div>
        )}
        {/* end of new line */}
      </header>
    </div>
  );
}

export default App;
