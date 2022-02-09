import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [rawItems, setRawItems] = useState([])
  const [itemFilter, setItemFilter] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setRawItems(data))
  }, [])

  const filteredItems = rawItems.filter((item) => {
    if (itemFilter === "") {
      return true
    } else if (item.description.toLowerCase().includes(itemFilter.toLowerCase())) {
      return item
    }
  })

  function renderDelete(id) {
    const reducedItems = rawItems.filter((item) => {
      if (item.id === id) {
        return null
      } else {
        return item
      }
    })
    setRawItems(reducedItems)
  }

  
  return (
    <div className="app">
      <Header setItemFilter={setItemFilter}/>
      <ListingsContainer filteredItems={filteredItems} renderDelete={renderDelete}/>
    </div>
  );
}

export default App;
