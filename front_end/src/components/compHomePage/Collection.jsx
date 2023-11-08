import React from "react";
import "./collection.css";
const Collection = () => {
  const collectionImage = [
    { img: "/IMG/Paste image (10).png", text: "November Outfits" },
    { img: "/IMG/Paste image (11).png", text: "Cashmere Set" },
    { img: "/IMG/Paste image (12).png", text: "The New Nordic" },
    { img: "/IMG/Paste image (13).png", text: "The Leather" },
  ];
  return (

<div className="collections d-flex align-items-center flex-wrap margin-y">
        {collectionImage.map((collection, i) => ( 
        <div key={i} className="collection-item overlay" > 
          <img src={collection.img} alt="" className="collection-img" />
            <p className="text-collection">{collection.text}</p>
        </div>
        ))}
    </div>

);
};

export default Collection;
