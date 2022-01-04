import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Phonetics(props) {
  console.log(props.phonetics);

  let phonetic = props.phonetics.text;
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <FaPlayCircle />
      </a>
      {phonetic}
    </div>
  );
}
