import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateFilter } from "../../actions/filter_actions";

const SearchBar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  

  const [query, setQuery] = useState("");

  const handleAreaSearch = (e) => {
    //setQuery
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //update filter with state
    dispatch(updateFilter("query", query));
    history.push("/search")
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        id="search-bar"
        type="search"
        value={query}
        placeholder="Enter a State, Neighborhood or ZIP code"
        onChange={handleAreaSearch}
      />
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
