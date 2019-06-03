import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import "./App.css";

export const StatusContext = createContext(null);
export const PlaceContext = createContext(null);

function App() {
  const [start, setStart] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(null);
  return (
    <StatusContext.Provider value={{ start, setStart }}>
      <PlaceContext.Provider value={{ currentPlace, setCurrentPlace }}>
        <div className="App">
          <Home />
        </div>
      </PlaceContext.Provider>
    </StatusContext.Provider>
  );
}

export default App;
