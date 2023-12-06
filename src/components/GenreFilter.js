import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const GenreFilter = ({genres, handleGenreChange}) => {
const [finalCounts,setFinalCounts]=useState();
let final;

  useEffect(() => {
    axios
    .get("http://localhost:3002/api/findCounts")
    .then((response) => {
      const counts = response.data;
      const indexedGenres = {};
      for (let i=0;i<counts[0].length;i++){
        if(counts[0][i].genreName=="NonGame"){
          indexedGenres["Non Game"] = counts[0][i].counts;
        }
        else if(counts[0][i].genreName=="RPG"){
          indexedGenres["Rpg"] = counts[0][i].counts;
        }
        else if(counts[0][i].genreName=="Free to Play"){
          indexedGenres["Free To Play"] = counts[0][i].counts;
        }
        else{
        indexedGenres[counts[0][i].genreName] = counts[0][i].counts;
        }
      }
      setFinalCounts(indexedGenres);
    })
    .catch((error) => {
      alert("Error: " + error.message); // Handle the error appropriately
    })
  
  },[]);

  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        {/* Map through the genres state object to create checkboxes */}
        {Object.entries(genres).map(([genreKey, value]) => {
          // Convert camelCase keys to spaced strings for labels
          const label = genreKey
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .replace('Mmo', 'MMO'); // Special case for acronyms
            

          return (
            <div className="form-check mb-2 me-4" key={genreKey}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={value}
                onChange={() => handleGenreChange(genreKey)}
                id={genreKey}
              />
              <label className="form-check-label" htmlFor={genreKey}>
                {finalCounts!=undefined? label + " (" +finalCounts[label]+ ")" :label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreFilter;
