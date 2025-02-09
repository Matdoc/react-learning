import React from 'react'
import { use } from 'react';
import { useParams } from 'react-router';


const SearchParams = () => {

    const geturlusingwindow = () => {
    // Get the URL using window
    let url = window.location.href;

    // Create a new URL object
    let newUrl = new URL(url);

    // Log the search parameters
    console.log("params", newUrl.searchParams);

    }

    const geturlusingReact = () => {
        const params = useParams();
        console.log("params", params);
    }

    
  return (
    <div>
        <h1>Print URL Parameters</h1>
        <button onClick={geturlusingwindow}>Get URL using window </button>
        <button onClick={geturlusingReact}>Get URL using React </button>

    </div>
  )
}

export default SearchParams
