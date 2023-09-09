import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/restaurants")
    const data = await res.json() // deserialising using json()

    setRestaurantList(data);
    setFilteredResList(data);
  };
  
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you are offline!!
   Check your internet connection</h1>

  // Conditional Rendering
  //if(restaurantList.length === 0){
  // return <Shimmer/>
  //}

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className = "px-4 py-2 bg-cyan-600 m-4"
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
        <div className = "flex items-center">
        <button
          className="px-4 py-2 bg-cyan-300"
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
       
      </div>
      <div className="flex flex-wrap">
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
