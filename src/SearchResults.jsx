
import React, {useState, useEffect } from "react"

function SearchResults({ searchQuery }) {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchQuery) {
          const loadSearch = async () => {
            try {
              const response = await fetch(
                `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`
              );
              const data = await response.json();
              setSearchResults(data.query.search);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          loadSearch();
        }
      }, [searchQuery]);

  return (
         <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.pageid}>
                <a href={`https://en.wikipedia.org/wiki/${result.title}`} target="_blank" rel="noopener noreferrer">
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default SearchResults;
