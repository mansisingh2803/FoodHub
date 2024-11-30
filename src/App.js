import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar';
import Body from './Component/Body/body';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './Component/About/About';
import Error from './Component/Erroor/Error';

import RestaurantMenu from './Component/RestaurantMenu/RestaurantMenu';
import Shimmer from './Component/Body/Shimmer';
import Grocery from './Component/Recipe/Recipe';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './Component/Cart/Cart';


const Recipe = lazy(() => import("./Component/Recipe/Recipe"))
function App() {

  //authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make an API call and send username and password

    const data = {
      name: "Mansi Singh"
    };
    setUserName(data.name)
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Navbar />
        {/*For Path*/}
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blogs",
          element: <Suspense fallback={<Shimmer />}><Recipe /></Suspense>
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },

  ]
)


export default appRouter;
