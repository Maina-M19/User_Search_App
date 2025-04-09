import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="text-center my-10">
      <input
        type="text"
        placeholder="Search by name or SSN"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded w-1/2"
      />
      <button
        onClick={() => query.length >= 3 && onSearch(query)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
