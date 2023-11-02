import { useState } from 'react'
import SearchBar from './SearchBar';
import SearchResults
 from './SearchResults';
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchQuery={searchQuery} />
      {/* Other content in your App */}
    </div>
  );
}

export default App
