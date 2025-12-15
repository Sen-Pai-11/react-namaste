import React from 'react'
import {  useState ,useEffect } from 'react'
import Shimmer from './Shimmer';
const RestaurantMenu = () => {


const [resInfo, setResInfo ] = useState(null);

useEffect(() => {
    fetchmenu();
}, [])

const fetchmenu = async() => {
    const data = await fetch(
        "https://namastedev.com/api/v1/listRestaurantMenu/123456");
   const json = await data.json();
    setResInfo(json?.data);
}



  return resInfo === null ? <Shimmer /> : (
    <div className="restaurant-menu">
        <h1>{json?.data.cards.card.card.info.name}</h1>
        <h2>menu</h2>
        <ul>
            <li>
                Biriyani
            </li>
            <li>Fried Rice</li>
            <li>Egg Biriyani</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;