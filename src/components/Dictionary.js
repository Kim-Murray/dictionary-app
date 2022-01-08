import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "../styles/Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("sunset");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(
    "What word would you like to search for?"
  );

  function handleResponse(response) {
    setResults(response.data);
    setError(false);
    setMessage("What word would you like to search for?");
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  function getPhotos() {
    const pexelsApiKey =
      "563492ad6f91700001000001a1f4892181654e5e87b82b5d55f15c47";
    let photosURL = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;

    axios
      .get(photosURL, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePhotos);
  }

  function search() {
    getPhotos();

    let dictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios
      .get(dictionaryURL)
      .then(handleResponse)
      .catch((e) => {
        setError(true);
        setMessage(`${e.response.data.message} Try another word 💬`);
      });
  }

  function searchWord(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (error) {
    return (
      <div className="dictionary">
        <section className="app-container">
          <form onSubmit={searchWord}>
            <h4>{message}</h4>
            <input
              type="search"
              placeholder="example: sunset"
              onChange={updateWord}
            />
          </form>
        </section>
      </div>
    );
  } else if (loaded) {
    return (
      <div className="dictionary">
        <section className="app-container">
          <form onSubmit={searchWord}>
            <h4>{message}</h4>
            <input
              type="search"
              placeholder="example: sunset"
              onChange={updateWord}
            />
          </form>
          <Results results={results} photos={photos} />
        </section>
      </div>
    );
  } else load();
}
