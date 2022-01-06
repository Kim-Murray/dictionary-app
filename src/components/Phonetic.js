import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import "../styles/Phonetic.css";

export default function Phonetics(props) {
  let phonetic = props.phonetics.text;
  return (
    <div className="phonetics">
      <a
        href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <FaPlayCircle />
      </a>
      {phonetic}
    </div>
  );
}
