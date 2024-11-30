import { useState, useEffect, useContext } from 'react'
import RestrauntCard, { withPromotedLabel } from './RestrauntCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { FaSearch } from "react-icons/fa";
import UserContext from '../../utils/userContext';
function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase()?.includes(searchInput.toLowerCase()));
}
const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const { loggedInUser, setUserName } = useContext(UserContext);
    const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);

    useEffect(() => {
        getRestaurants();
    }, []
    );

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);


        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you are offline!! Please check your internet connection.</h1>
    }



    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length === 0)
    //     return <h1>No restaurants match your filter!!!</h1> // change on 10-03-2024




    return (allRestaurants.length === 0) ? (<Shimmer />) : (
        <div className='body'>
            <div className="filter flex ml-10">
                <div className="search relative w-1/3   mr-2 flex items-center ml-20 ">
                    {/* Search Input */}
                    <div className='w-full  p-2 border   border-c5c5c5 rounded-lg '>
                        <input
                            type="text"
                            placeholder="Search for Restaurants..."
                            className="searchBox focus:outline-none"
                            value={searchText}
                            onChange={(e) => { setSearchText(e.target.value) }}
                            onKeyDown={
                                (e) => {
                                    if (e.key === "Enter") {
                                        const data = filterData(searchText, allRestaurants);
                                        setFilteredRestaurants(data); // Update the filtered data
                                    }
                                }} // Trigger search on Enter key press
                        />
                    </div>
                    {/* Search Icon */}
                    <div
                        className="absolute py-2 right-0 top-0 bottom-0 flex items-center pr-6 cursor-pointer rounded-lg "
                        onClick={() => {
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurants(data);
                        }}
                    >
                        <FaSearch size={20} color="gray" />
                    </div>
                </div>
                <div className='flex items-center mr-20'>
                    <div className="search my-2 py-4 px-2 ">
                        <button
                            className="px-4 py-2 bg-gray-100 rounded-lg"
                            onClick={() => {
                                // * Filter logic
                                const filteredList = allRestaurants.filter(
                                    (res) => parseFloat(res.info.avgRating) > 4.5
                                );

                                setFilteredRestaurants(filteredList);
                                console.log(filteredList);
                            }}
                        >
                            Top Rated Restaurants
                        </button>
                    </div>
                    <div className="search my-2 px-2 py-4 flex items-center">
                        <button
                            className="px-4 py-2 bg-gray-100  rounded-lg"
                            onClick={() => {
                                // * Filter logic
                                const filteredList = allRestaurants.filter(
                                    (res) => res.info.sla.deliveryTime > 30
                                );

                                setFilteredRestaurants(filteredList);
                                console.log(filteredList);
                            }}
                        >
                            Less than 30 mins
                        </button>
                    </div>
                    <div className="search my-2 px-2 py-4 flex items-center">
                        <button
                            className="px-4 py-2 bg-gray-100  rounded-lg"
                            onClick={() => {
                                // * Filter logic
                                const filteredList = allRestaurants.filter(
                                    (res) => res.info.type === 'F'
                                );

                                setFilteredRestaurants(filteredList);
                                console.log(filteredList);
                            }}
                        >
                            Foods
                        </button>
                    </div>
                    <div className="search my-2 px-2 py-4 items-center">
                        <button
                            className="px-4 py-2 bg-gray-100  rounded-lg"
                            onClick={() => {
                                // * Filter logic
                                const filteredList = allRestaurants.filter(
                                    (res) => res.info.type === 'D'
                                );

                                setFilteredRestaurants(filteredList);
                                console.log(filteredList);
                            }}
                        >
                            Desserts
                        </button>
                    </div>

                </div>

            </div>
            <div className='flex justify-center flex-wrap'>
                {/* you have to write code for filtered  */}


                {filteredRestaurants.map((restaurant) => {
                    return (
                        <div className='flex flex-wrap relative justify-between gap-4 p-6 '>
                            <Link style={{
                                textDecoration: 'none',
                                color: '#000',
                            }} to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>

                                {/**If the restaurant is promoted then add a promoted label to it */}
                                {parseFloat(restaurant.info.avgRating) > 4.6 ? (<RestaurantCardPromoted {...restaurant.info} />) :
                                    (<RestrauntCard {...restaurant.info} />)}

                            </Link>
                        </div>
                    );
                })}

            </div>

        </div>
    );


}

export default Body