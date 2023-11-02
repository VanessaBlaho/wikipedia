import React, {useState} from "react";


export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] =useState("");
    //initial state of the search query is an empty search bar

    const handleSearch = () => {
        props.onSearch(searchQuery);
    };
//props is the single argument of SearchBar. When it is passed through the searchbar component
    return(
        <div>
        <input
          type="text"
          placeholder="Search Wikipedia"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <br/>
      
      </div>
    );
}