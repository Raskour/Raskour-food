import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

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

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <button>Clear Cart</button>
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
            <strong>Pay Now</strong>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
