

import { useEffect, useState } from 'react';
//import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    // fetchdata
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let encoded_id = encodeURIComponent(resId);
        //console.log(encoded_id);
        let data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=" + encoded_id);
        let json = await data.json();

        setResInfo(json.data);
        console.log(json.data);

    };

    return resInfo;
};

export default useRestaurantMenu;
