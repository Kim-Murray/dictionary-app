import React from "react";
import Dictionary from "./components/Dictionary";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary />
      <footer>
        This dictionary is{" "}
        <a href="https://github.com/Kim-Murray/dictionary-app">open sourced</a>{" "}
        and hosted on{" "}
        <a href="https://trusting-shaw-d82573.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
