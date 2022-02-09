import React from "react";
import Search from "./Search";

function Header({ setItemFilter }) {
  
  
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setItemFilter={setItemFilter}/>
    </header>
  );
}

export default Header;
