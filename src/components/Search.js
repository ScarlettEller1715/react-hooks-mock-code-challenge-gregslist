import React from "react";

function Search({ setItemFilter }) {
  function handleSubmit(e) {
    e.preventDefault();
    setItemFilter(e.target.value);
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => handleSubmit(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
