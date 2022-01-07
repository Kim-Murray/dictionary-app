import React from "react";

import "../styles/Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  return (
    <div className="photos">
      <div className="container-fluid">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                {" "}
                <a href={photo.url} target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid photo"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
