import React, { useState, useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import logo from "../../images/companyLogo.png";
import userLogin from "../../images/userLogin.png";
import burgerMenu from "../../images/burgerMenu.png";
import banner from "../../images/banner.png";
import best from "../../images/bestflight.png";
import cheapest from "../../images/cheapestflight.png";
import direct from "../../images/directflight.png";
import explore from "../../images/explore.png";
import DirectionRoute from "../DirectionRoute";
import Footer from "../../components/Footer";
import Cards from "../../pages/Cards";
import s from "./MainPage.module.scss";
import axios from "axios";

const endpoint =
  "https://skyscanner44.p.rapidapi.com/fly-to-country?destination=";
function MainPage() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [adults, setAdults] = useState("");
  const [response, setResponse] = useState("");
  const endpoint = "https://skyscanner44.p.rapidapi.com/search?";

  const onAdultChange = (event) => {
    setAdults(event.target.value);
  };
  const onOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const onDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const onDateChange = (event) => {
    setDate(event.target.value);
  };
  const onCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  const onResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const onButtonPress = async (e) => {
    e.preventDefault();
    navigate(`/direction?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`)
    // try {
    //   const response = await fetch(
    //     `${endpoint}adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "X-RapidAPI-Key":
    //           "c5b7ce6d59msh628ea192fa8b5ffp186318jsnfbe20ac3d2c2",
    //         "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   setResponse(data.itineraries.buckets);
    //   console.log(data.itineraries.buckets);
    // } catch (error) {
    //   return error;
    // }
  };
  // function removeTAndDash(dateString) {
  //   return dateString.replace(/[T-]/g, " ");
  // }
  

  
  // console.log(removeTAndDash("2023-09-19T06:30:00")); 
  




  return (
    <>
      <header className={s.wrapper}>
        <div className={s.headerInner}>
          <div className={s.logoBlock}>
            <img src={logo} alt="logo" className={s.companyLogo} />
          </div>

          <div className={s.authBlock}>
            <img src={userLogin} alt="user" className={s.userLogin} />
            <p className={s.loginText}>My account</p>
            <img src={burgerMenu} alt="menu" className={s.burgerMenu} />
            <button onClick={onLogOut} className={s.logOut}>
              LogOut
            </button>
          </div>
        </div>

        <h2 className={s.introText}>
          Quickly scan all your favorite travel sites
        </h2>

        <form className={s.flightSection} onSubmit={onButtonPress}>
          <div className={s.inputs}>
            <span className={s.fromText}>From</span>
            <input
              type="text"
              className={s.fromLocation}
              value={origin}
              onChange={onOriginChange}
              placeholder="Los Angeles"
            />

            <span className={s.toText}>To</span>
            <input
              type="text"
              className={s.toDestination}
              value={destination}
              onChange={onDestinationChange}
              placeholder="Country,city or airport"
            />

            <span className={s.departText}>Depart</span>
            <input
              type="text"
              className={s.departDate}
              value={date}
              onChange={onDateChange}
              placeholder="Date: 2023-05-21"
            />

            <span className={s.returnText}>Currency</span>
            <input
              type="text"
              className={s.currency}
              value={currency}
              onChange={onCurrencyChange}
              placeholder="EUR, USD, KZT"
            />

            <span className={s.cabinText}>Travelers & cabin class</span>
            <input
              type="text"
              className={s.cabinClass}
              value={adults}
              onChange={onAdultChange}
              placeholder="Adults: 1"
            />
          </div>
          {/* <Link to={`/direction`} relative="path"> */}
            <button className={s.searchButton} type="submit">
              Search
            </button>
          {/* </Link> */}
        </form>
        <div className={s.checkboxBlock}>
          <input type="checkbox" className={s.checkbox} />
          <p className={s.checkboxText}> Direct flights</p>
        </div>
        <br></br>
      </header>

      <div className={s.buttons}>
        <button className={s.buttonPros}>
          <img src={best} alt="best" className={s.best} />
          <span className={s.buttonProsText}>Best Flights</span>
        </button>
        <button className={s.buttonPros}>
          <img src={cheapest} alt="cheapest" className={s.best} />
          <span className={s.buttonProsText}> Cheapest Flight</span>
        </button>
        <button className={s.buttonPros}>
          <img src={direct} alt="direct" className={s.best} />
          <span className={s.buttonProsText}>Direct Flight</span>
        </button>
        <button className={s.buttonPros}>
          <img src={explore} alt="explore" className={s.best} />
          <span className={s.buttonProsText}> Explore everywhere</span>
        </button>
      </div>

      <div className={s.banner}>
        <figure className={s.fig}>
          <img src={banner} alt="banner" className={s.bannerImage} />
          <figcaption className={s.figcaption}>
            <h2 className={s.bannerWords}>
              Plan the ultimate <br></br> summer trip!{" "}
            </h2>
            <p className={s.bannerSecWords}>
              Find destination inspiration, tips and money-saving <br></br>{" "}
              hacks.
            </p>
            <button className={s.bannerButton}>Show me the sun</button>
          </figcaption>
        </figure>
      </div>
      <div className={s.textBlock}>
        <h2 className={s.slogan}>Popular right now</h2>
        <p className={s.description}>
          Other travellers are loving these destinations. Search flights,
          hotels, and car hire and join them on the adventure.
        </p>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default MainPage;
