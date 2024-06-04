import React, { useState, useEffect, useRef } from "react";

export default function SearchBar({ posts, onSearch, onClear, hasSearched }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchBarRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const input = event.target.value.toLowerCase();
    setQuery(input);
    if (input) {
      const filteredSuggestions = posts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(input)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setSuggestions([]);
  };

  const handleSelectSuggestion = (suggestion) => {
    const selectedQuery = suggestion.frontmatter.title;
    setQuery(selectedQuery);
    onSearch(selectedQuery);
    setSuggestions([]);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    onClear();
  };

  return (
    <div class="div" className="relative  px-10" ref={searchBarRef}>
      <div className="flex justify-center h-8 items-center border-2 hover:animate-pulse  border-[#e1dbd6] hover:border-[#cfcac6] mt-2 rounded-xl mx-auto max-w-fit  p-8">
        <form className="flex gap-6 w-full" onSubmit={handleSubmit}>
          <input
            className="outline-none bg-[#f9f6f2]"
            id="search"
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={handleChange}
            autocomplete="off"
          />

          <div className="flex gap-6 text-[#938576] justify-between ">
            <button className="scale-150" type="submit">→</button>
            {hasSearched && (
              <button type="button" onClick={handleClear}>
                &#x2715;
              </button>
            )}
          </div>
        </form>
      </div>

      {suggestions.length > 0 && (
        <ul
          className="autocomplete-dropdown absolute bg-white border border-[#e1dbd6]  pt-10 mt-2 max-h-70 overflow-y-auto"
          ref={dropdownRef}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion.frontmatter.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
