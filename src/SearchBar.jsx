import React, {useState} from "react";


export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] =useState("");

    const handleSearch = () => {
        props.onSearch(searchQuery);
    };
    return(
        <div>
        <input
          type="text"
          placeholder="Search Wikipedia"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
}