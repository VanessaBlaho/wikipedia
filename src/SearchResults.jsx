import React, { useState, useEffect } from "react";

function SearchResults({ searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    if (searchQuery) {

      const offSet = (page - 1) * pageSize;
      const updatedOffSet =offSet +10;

      const loadSearch = async () => {
        try {
          const response = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`
          );
          const data = await response.json();
          setSearchResults(data.query.search);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      loadSearch();
      setOffset(updatedOffSet);
    }
  }, [searchQuery, page]);
//these are the dependencies and when they change the previous function will happen
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleLoadPrevious = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <h2>Search Results:</h2>

      {searchResults.map((result) => (
        <p key={result.pageid}>
          <a
            href={`https://en.wikipedia.org/wiki/${result.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {result.title}
          </a>
        </p>
      ))}
      <br />
      {/* // here is where you make the function happen  */}
      <button onClick={handleLoadPrevious} disabled ={page === 1}>Previous</button>
      <button onClick={handleLoadMore}>Next</button>
      <br />
      Current Page : {page}
    </div>
  );
}

export default SearchResults;
