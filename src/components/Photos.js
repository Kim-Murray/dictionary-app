import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  return (
    <div className="photos">
      <img
        src={props.photos[0].src.original}
        alt={props.photos[0].alt}
        className="img-fluid"
      />
    </div>
  );
}
