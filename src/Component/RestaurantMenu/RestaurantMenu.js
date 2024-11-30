import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import ShimmerMenu from '../Body/ShimmerMenu';
import { CDN_URL } from '../../utils/Constant';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    let { resId } = useParams();


    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <ShimmerMenu />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        cloudinaryImageId,
        avgRating,
        deliveryTime,
    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div className="text-center max-w-70 max-h-fit">

            <h1 className='font-bold my-8 text-2xl'>{name}</h1>
            <div className='shadow-lg shadow-gray w-6/12 m-auto border-4 my-16 border-gray-50 border-solid rounded-xl'>
                <p className='font-bold text-lg'>{cuisines.join(', ')}</p>

                <div className="bottom">
                    <h4 className="avg-rating">
                        <span
                            className="icons"
                            style={{
                                position: 'relative',
                                top: '2px',
                                marginRight: '3px',
                            }}
                        >
                            <AiOutlineStar />
                        </span>
                        <span>{avgRating}</span>
                    </h4>
                    <h4 className="time">
                        <span
                            className="icons"
                            style={{
                                position: 'relative',
                                top: '2px',
                                marginRight: '3px',
                            }}
                        >
                            <FiClock />
                        </span>
                        <span> {deliveryTime} MINS</span>
                    </h4>
                    <h3>{costForTwoMessage}</h3>
                </div>


            </div>
            {/*Categories Accordions*/}
            {categories.map((category, index) => (

                // controlled component
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}

                />))}



        </div>
    );
};

export default RestaurantMenu;
