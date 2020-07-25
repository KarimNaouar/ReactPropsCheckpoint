import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import imageInSrc from "./myimage.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile>
          <img src={imageInSrc} alt="ImageHere" />
        </Profile>
      </header>
    </div>
  );
}

export default App;
