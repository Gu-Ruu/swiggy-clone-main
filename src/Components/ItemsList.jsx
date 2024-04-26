import { useDispatch } from "react-redux";
import { addToCart } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (items) => {
    // Dispatch
    dispatch(addToCart(items));
  };
  return (
    <div>
      {items.map((items) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={items.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="p-1 font-medium">{items.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {items.card.info.defaultPrice / 100 ||
                  items.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs ">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="p-2 bg-black text-white  shadow-xl rounded-xl m-auto"
                onClick={() => handleAddItems(items)}
              >
                Add
              </button>
            </div>
            <img
              className="min-w-32 h-32 rounded-lg shadow-lg"
              src={CDN_URL + items.card.info.imageId}
              alt="Food"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
