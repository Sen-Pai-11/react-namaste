import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 *  -navbar - navitems
 *  -logo
 * body
 *  -searchbar
 *  -restraurent container
 *   -restrocard
 *     -img
 *     -rating
 *     -name of res
 *     -cuisines
 *     -delivery time
 * footer
 *  -copyright
 *  -links
 *  -address
 *  -social links
 *  -contact info
 * 
 */

const Header = () => {
    return (
        <div className = "header">
        <div className="logo-container">
            <img className="logo" src="https://imgs.search.brave.com/MSqooKbITwtQfFNAUPbEI6V1hD2_1GB-rW7uT7aVKTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ29vZC1mb29k/LWxvZ28tZGVzaWdu/Xzc5MTY5LTEwLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
    
}

const Restaurantcard = (props) => {
    const {resName, cuisine} = props;
    return (
        <div className="restro-card">
        <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/62cada56-2bbe-44a1-9172-d07af4c77d33_28721.jpg"/>
            <h3>
                {props.resName}
            </h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>20 mins</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="restro-container">
                <Restaurantcard  resName="MEghna" cuisine="All " />
                <Restaurantcard resName="KFC" cuisine="chicken " />
            </div>
        </div>
    );
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);