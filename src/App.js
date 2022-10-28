import { useEffect, useState } from "react";
import "./App.css";
import KongaScene from "./KongaScene.js";

import kongaSong from "./konga.mp3";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 1) {
      let container = document.querySelector(".App");

      // Setup the scene:
      const scene = new KongaScene();
      scene.element.style.display = "none";

      scene.element.width = window.innerWidth;
      scene.element.height = window.innerHeight;
      container.appendChild(scene.element);

      // Setup loading:
      const loadingElement = document.createElement("span");
      loadingElement.textContent = "Preparing…";

      // Audio:
      const audioPlayer = document.getElementsByTagName("audio")[0];

      audioPlayer.addEventListener("play", () => {
        loadingElement.parentNode.removeChild(loadingElement);

        scene.element.classList.add("cue-in");
        scene.element.style.display = "block";

        document.title = "Conga!";
      });

      // Button:
      const button = document.querySelector(".button");
      button.addEventListener("click", (event) => {
        // Remove button:
        button.parentNode.removeChild(button);

        // Add loading:
        container.appendChild(loadingElement);

        // Trigger playback:
        audioPlayer.play();
      });

      container.appendChild(button);
    }

    setCounter(1);
  }, [counter]);

  return (
    <>
      <audio controls="" preload="" loop="">
        <source src={kongaSong} type="audio/mp3" />
        <embed src={kongaSong} loop="" />
      </audio>
      <div className="App">
        <h1 className="title">Trovanini</h1>
        <div className="enter">
          <button className="button">Enter</button>
        </div>
      </div>
    </>
  );
}

export default App;
