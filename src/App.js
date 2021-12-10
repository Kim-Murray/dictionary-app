import React from "react";
import Dictionary from "./components/Dictionary";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary />
      <footer>
        <small>
          This{" "}
          <a href="https://github.com/Kim-Murray/dictionary-app">
            open sourced
          </a>{" "}
          dictionary was built by{" "}
          <a href="https://sad-yalow-d889ae.netlify.app/">Kim Murray</a> and
          hosted on{" "}
          <a href="https://trusting-shaw-d82573.netlify.app/">Netlify</a>
        </small>
      </footer>
    </div>
  );
}
