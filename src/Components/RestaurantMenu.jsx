import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // Approach 2. using fake API that will get us Restaurant by id from remote server
  const [res, setRes] = useState(null);

  // Extracting resId param from the url.
  const { resId } = useParams();

  const dispatch = useDispatch(); // this is a hook

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    // Making fetch req to fetch single restaurant based on the restaurant Id.
    fetchResById(resId);
  }, []);

  const fetchResById = async function (resId) {
    const res = await fetch("http://localhost:3000/api/restaurants/" + resId);
    const data = await res.json();

    setRes(data);
  };

  // approach 1. using JS Array find method
  // const res = resList.find((res) => res.data.data.id === resId);

  return res === null ? (
    <SingleShimmer />
  ) : (
    <div>
      <article>
        <h1>
          <strong>{res.name}</strong>
        </h1>

        <h2>{res.avgRating}- star</h2>
        <h2>Menu</h2>
        <br></br>
        <div>
          <ul>
            {res.menu.map((item) => (
              <li key={item.id}>
                <img src={CDN_URL + item.imageId} />
                <h3>
                  <strong>{item.title}</strong>
                </h3>
                <strong>Rs.{item.price}</strong>
                <p>{item.description}</p>

                <button onClick={() => handleAddItem(item)}>Add</button>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};
export default RestaurantMenu;

const SingleShimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card">Card</div>
    </div>
  );
};
