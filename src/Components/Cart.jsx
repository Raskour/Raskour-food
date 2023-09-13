import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  // const dispatch = useDispatch();
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
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
                  <button>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <strong>Total Price: </strong>
      </div>
    </div>
  );
};
export default Cart;
