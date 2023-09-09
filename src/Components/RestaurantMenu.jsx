import { useEffect, useState } from "react";
import {CDN_URL} from "../utils/constants"
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // Approach 2. using fake API that will get us Restaurant by id from remote server
  const [res, setRes] = useState(null);

  // Extracting resId param from the url.
  const { resId } = useParams();

  useEffect(() => {
    // Making fetch req to fetch single restaurant based on the restaurant Id. 
    fetchResById(resId);
  }, []);

  const fetchResById = async function(resId){
    const res = await fetch("http://localhost:3000/api/restaurants/" + resId);
    const data = await res.json();


    setRes(data);
  };

  console.log({res})
  // approach 1. using JS Array find method
  // const res = resList.find((res) => res.data.data.id === resId);

  return res === null ? <SingleShimmer /> : (
    <div>
      <h1>Restaurant Menu page</h1>
      <article className="res-menu">
      <img
        className="res-logo"
        src={
          CDN_URL + res.data.data.cloudinaryImageId
    }
        />
        <h2>{res.data.data.name}</h2>
        <h3>{res.data.data.avgRating}</h3>
        <h3>Menu</h3>
        <ul>
          {res.data.data.menu.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <strong>{item.price}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
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
  )
}