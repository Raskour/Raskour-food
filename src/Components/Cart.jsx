import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { CDN_URL } from "../utils/constants";
import { removeItem, addItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CartIcon, DeleteIcon } from "../commons/icons";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].price;
    }
    return sum;
  }

  function handleRemove(id) {
    dispatch(removeItem(id));
    toast.success("Item has been removed from the cart!");
  }

  function handleClearCart() {
    dispatch(clearCart());
    toast.success("Cart has been cleared!");
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>
          Your cart is empty. Please add some items by exploring range of menu
          items available in the <Link to="/">Restaurants page</Link>
        </h1>
      </div>
    );
  }

  return (
    <section className="flow">
      <div className="cart-heading">
        <h1>
          Cart
          <span>
            {cartItems.length} {cartItems.length > 1 ? "Items" : "Item"}
          </span>
        </h1>
        <div>
          <button onClick={handleClearCart} className="danger">
            Clear Cart <DeleteIcon />
          </button>
        </div>
      </div>
      <div>
        <ul className="flow">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                <img src={CDN_URL + item.imageId} alt={item.description} />
              </div>
              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <strong>AUD.{item.price}</strong>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="danger"
                >
                  Remove <DeleteIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer class="cart-footer">
        <div>
          <strong>Total Price: &nbsp;</strong>
          <span>AUD {getTotalPrice()}</span>
        </div>
        <button className="btn-primary">Pay Now</button>
      </footer>
    </section>
  );
};
export default Cart;
