import React, { useState } from "react";

export default function SearchBar({ onSearch, onClear, hasSearched }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase()); // Lowercase for case-insensitive search
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); // Call the passed-down onSearch function with the query
  };

  return (
    <div>
      {" "}
      <div className="search flex justify-center h-8 items-center border-2 mt-2 rounded-xl max-w-fit p-8 ">
        <form className="flex justify-between gap-10" onSubmit={handleSubmit}>
          <input
            className="outline-none"
            id="search"
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>

          {hasSearched && (
            <button type="button" onClick={onClear}>
              Clear Search
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
