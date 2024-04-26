import React from "react";
import { CDN_URL } from "../Utils/constants";
const RestroCard = (Props) => {
  const { restroData } = Props;

  const { name, cuisines, avgRating, costForTwo, sla } = restroData?.info;
  return (
    <div className="restro m-4 p-4 w-[250px] h-auto rounded-lg bg-slate-200 hover:bg-slate-300 ">
      <img
        className="rounded-lg w-[250px] h-[220px] object-cover shadow-md"
        src={CDN_URL + restroData.info.cloudinaryImageId}
        alt="Food"
      ></img>
      <h3 className="font-bold text-lg mt-4 py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

//Higher order Component

//Input -  ReataurantCard => RestaurantCardPromoted
export const PromoteRestro = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label
          className="absolute bg-black text-white m-2 p-2 rounded-lg"
          htmlFor="promotion"
        >
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
