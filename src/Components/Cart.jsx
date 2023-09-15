import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem, addItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function getTotalPrice() {
    let sum = 0;
    for (i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].price;
    }
    return sum;
  }

  function handleRemove(id) {
    dispatch(removeItem(id));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return (
      <h2>
        Your cart is empty. Please add some items by visiting{" "}
        <Link to="/">home</Link>
      </h2>
    );
  }

  return (
    <div>
      <h1 className="">Cart</h1>
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <img src={CDN_URL + item.imageId} alt={item.description} />

                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <strong>Rs.{item.price}</strong>
                  <div>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <strong>Total Price:{getTotalPrice()} </strong>
        </div>
        <div>
          <button>
            <strong>Pay Now</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
