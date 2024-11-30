import React from "react";
import { FiClock } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';


const RestrauntCard = ({
    name, cuisines, cloudinaryImageId, avgRating, sla,
}) => {

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer w-64 h-72 flex flex-col">
            <div className="card__image w-full h-40">
                <img
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="card__info p-4 flex flex-col justify-between h-full">
                <div>
                    <h3 className="font-bold text-lg truncate">{name}</h3>
                    <em className="text-md text-gray-600 block truncate">{cuisines.join(", ")}</em>
                </div>
                <div className="flex items-center text-md text-gray-600">
                    <AiFillStar className="text-green-500 mr-1" />
                    <span>{avgRating} stars</span>
                </div>
                <div className="flex items-center text-md text-gray-600">
                    <FiClock className="mr-1" />
                    <span>{sla.deliveryTime} minutes</span>
                </div>
            </div>
        </div>


    );
};
// Higher Order Component

// input - restaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestrauntCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-2 bg-red-500 text-white px-2 py-1 rounded-sm z-10">Promoted</label>
                <RestrauntCard  {...props} />
            </div>
        );
    }
};

export default RestrauntCard;