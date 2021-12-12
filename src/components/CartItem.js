import { useContext } from "react";
import "../css/CartItem.css";
import CartContext from "../context/cart/CartContext";
// import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.names} {item.price}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;