import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.productsInCart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" m-2 p-5 text-center">
      <h1 className="text-2xl t font-bold">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length===0 && <h1>Cart is Empty, Add items to the Cart</h1>}
        <ItemList key={cartItems?.card?.info?.id} items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
