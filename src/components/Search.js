import React, { useState } from "react";

function Search( { filter } ) {

  const [filterString, setFilterString] = useState("")

  function handleChange(event){
    setFilterString(event.target.value)
    filter(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
