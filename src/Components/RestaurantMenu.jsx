import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { addFav } from "../utils/favSlice";

const RestaurantMenu = () => {
  // Approach 2. using fake API that will get us Restaurant by id from remote server
  const [res, setRes] = useState(null);

  // Extracting resId param from the url.
  const { resId } = useParams();
  const dispatch = useDispatch(); // this is a hook

  const handleAddFav = (item) => {
    dispatch(addFav(item));
    toast.success("Item has been added successfully!");
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));

    toast.success("Item has been added successfully!");
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
      <h1>
        <strong>{res.name}</strong>
      </h1>
      <span className="pill">⭐{res.avgRating}</span>
      <div className="divider" />
      <section>
        <h2 className="sr-only">Menu</h2>
        <div>
          <ul className="flow">
            {res.menu.map((item) => (
              <li key={item.id} className="res-menu-wrapper">
                <div className="res-menu-info">
                  <h3>{item.title}</h3>
                  <strong>Rs.{item.price}</strong>
                  <p>{item.description}</p>
                </div>
                <div className="res-menu-img">
                  <img src={CDN_URL + item.imageId} />
                  <button onClick={() => handleAddItem(item)}>Add</button>
                  <button onClick={() => handleAddFav(item)}>Fav</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
