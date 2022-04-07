import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  let [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getIt() {
      let hr = await fetch("/locations");
      let data = await hr.json();
      setLocations(data);
    }
    getIt();
  }, []);

  return (
    <ul>
      {locations.map((location) => (
        <li>
          {location.latitude} - {location.longitude}
        </li>
      ))}
    </ul>
  );
}

export default App;
