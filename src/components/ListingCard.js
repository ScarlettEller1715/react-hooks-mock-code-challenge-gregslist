import React, { useState } from "react";

function ListingCard({ description, image, location, id, renderDelete }) {
  
  const [favStatus, setFavStatus] = useState(false)
  
  function handleFav() {
    setFavStatus(!favStatus)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(() => console.log("item deleted Miss!"))

    console.log(id)
    renderDelete(id)
  }
  

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favStatus ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
