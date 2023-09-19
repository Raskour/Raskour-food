import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { CDN_URL } from "../utils/constants";
import { removeFav, addFav, clearFav } from "../utils/favSlice";
import { Link } from "react-router-dom";
import { CartIcon, DeleteIcon } from "../commons/icons";

function Fav() {
  const favItems = useSelector((store) => store.fav.items);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeFav(id));
    toast.success("Item has been removed from the Favourites!");
  }

  function handleClearCart() {
    dispatch(clearFav());
    toast.success("Favourites has been cleared!");
  }

  if (favItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>
          No favourites added yet. Add some favourites favourites&nbsp;
          <Link to="/">Restaurants.</Link>
        </h1>
      </div>
    );
  }

  return (
    <section className="flow">
      <div className="cart-heading">
        <h1>
          Favourites
          <span>
            {favItems.length} {favItems.length > 1 ? "Items" : "Item"}
          </span>
        </h1>
        <div>
          <button onClick={handleClearCart} className="danger">
            Clear Fav <DeleteIcon />
          </button>
        </div>
      </div>
      <div>
        <ul className="flow">
          {favItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <img
                  src={CDN_URL + item.cloudinaryImageId}
                  alt={item.name + " restaurant"}
                />
              </div>
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <span>Food: {item.cuisines}</span>
                <span>{item.avgRating} ⭐</span>
                <span className="time">{item.deliveryTime} mins</span>
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
    </section>
  );
}
export default Fav;

/* 
       <ul className="flow">
          {favItems.map((item, index) => (
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

*/
