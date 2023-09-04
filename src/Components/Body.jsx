import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await new Promise((resolve) => {
      setTimeout(resolve, 1000, resList);
    });

    setRestaurantList(data);
    setFilteredResList(data);
  };

  // Conditional Rendering
  //if(restaurantList.length === 0){
  // return <Shimmer/>
  //}

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={() => {
              const filteredRes = restaurantList.filter((res) =>
                res.data.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.data.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
         <Link key={res.data.data.id} to={ "/restaurants/" +res.data.data.id}> 
         <RestaurantCard  resData={res} />
         </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
