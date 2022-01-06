import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "../styles/Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("sunset");
  const [meaningResults, setMeaningResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setMeaningResults(response.data);
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

    axios.get(dictionaryURL).then(handleResponse);
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

  if (loaded) {
    return (
      <div className="dictionary">
        <section className="app-container">
          <form onSubmit={searchWord}>
            <h4>What word would you like to search for?</h4>
            <input
              type="search"
              placeholder="example: sunset"
              onChange={updateWord}
            />
          </form>
          <Results results={meaningResults} photos={photos} />
        </section>
      </div>
    );
  } else load();
}
