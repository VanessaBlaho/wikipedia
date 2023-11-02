import { useState } from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchQuery={searchQuery} page={page}/>
      {/* Other content in your App */}
    </div>
  );
}

export default App
