import RestroCard, { PromoteRestro } from "./RestroCard";
import Shimmer from "./Shimmer";
import useOnlineOfflineStatus from "../Utils/useOnlineOfflineStatus";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
const Body = () => {
  //State Variable = Super Powerful Variable = Also Known as HOOKS :)
  const [ListofRestro, setListofRestro] = useState([]);

  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestroPromoted = PromoteRestro(RestroCard);
  useEffect(() => {
    fetchData();
  }, []);
  //Whenever State Variable Update, React Triggers a Reconcil
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.502641&lng=77.6643502&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(ListofRestro);
    const json = await data.json();
    //Optional Chaining  Operator - It allows you to access the properties of an object without having to check if the object
    setListofRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Redering
  // Normal JS Variable
  // let listofRestro = [];
  const onOffStatus = useOnlineOfflineStatus();
   if (!onOffStatus)
    return (<h1>Looks like You are Offline, Check Your Connection!</h1>);

  const { loggedInUser, setUserName } = useContext(UserContext);
  return ListofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p- flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              //filer Logic Here
              let filteredList = ListofRestro.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestro(filteredList);
              console.log(filteredList);
            }}
          >
            4+ Stars Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p- flex items-center">
          <label className="px-1">UserName :</label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="search m-4 p-4">
          <label className="px-1">Foods</label>
          <input
            placeholder="SearchForFoodItems"
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-5 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              const filteredRestro = ListofRestro.filter((event) =>
                event.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap  ">
        {filteredRestro.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestroPromoted restroData={restaurant} />
            ) : (
              <RestroCard restroData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
