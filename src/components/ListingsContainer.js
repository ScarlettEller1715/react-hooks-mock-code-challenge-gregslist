import React from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({ filteredItems, renderDelete }) {
  
  const renderedItems = filteredItems.map((item) => {
    return <ListingCard description={item.description} 
                        image={item.image} 
                        location={item.location} 
                        id={item.id} 
                        key={item.id}
                        renderDelete={renderDelete}/>
  })
  
  return (
    <main>
      <ul className="cards">
        {renderedItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
