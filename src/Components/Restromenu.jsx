import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";
import Shimmer from "./Shimmer";
import RestroCategories from "./RestroCategories";
const Restromenu = () => {
  const { resId } = useParams();

  const restroInfo = useRestroMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (restroInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restroInfo?.cards[0]?.card?.card?.info;


  const menu_s =
    restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = menu_s.filter((category) => {
    return (
      category.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });  
  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}
        <br />
        {costForTwoMessage}
      </p>
      {/* Category Section */}
      {categories.map((category, index) => (
        //Controled Component
        <RestroCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restromenu;
