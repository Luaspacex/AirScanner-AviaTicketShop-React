import React, { useState, Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/airScannerWhite.png";
import userLogin from "../../images/userLogin.png";
import burgerMenu from "../../images/burgerMenu.png";
import best from "../../images/bestflight.png";
import cheapest from "../../images/cheapestflight.png";
import direct from "../../images/directflight.png";
import explore from "../../images/explore.png";
import MainLogo from "../../components/MainLogo/MainLogo";
import Footer from "../../components/Footer";
import Cards from "../../pages/Cards";
import s from "./MainPage.module.scss";
import axios from "axios";

function MainPage() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };
  const [data, setData] = useState([]);
  const [second, setSecond] = useState([]);
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [adults, setAdults] = useState("");
  const [response, setResponse] = useState("");
  const [selectedResult, setSelectedResult] = useState("");
  const endpoint = "https://skyscanner44.p.rapidapi.com/search?";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://skyscanner44.p.rapidapi.com/autocomplete?query=${origin}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "a5f0ce3d77msh9cfb3d82c68c5dcp17e498jsnd7a5254c2ec5",
              "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [origin]);

  useEffect(() => {
    const secondData = async () => {
      try {
        const response = await fetch(
          `https://skyscanner44.p.rapidapi.com/autocomplete?query=${destination}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "a5f0ce3d77msh9cfb3d82c68c5dcp17e498jsnd7a5254c2ec5",
              "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
              "Content-Type": "application/json",
            },
          }
        );
        const jsonSecond = await response.json();
        setSecond(jsonSecond);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    secondData();
  }, [destination]);


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
  const handleResultClick = (result) => {
    setSelectedResult(result);
    setOrigin(result.iata_code);
  };


  const handleSecond = (result) => {
    setSelectedResult(result);
    setDestination(result.iata_code);
  };

  const onButtonPress = async (e) => {
    e.preventDefault();
    navigate(
      `/direction?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`
    );
  };

  return (
    <>
    <div className={s.position}>
    <div className={s.main}>
      <header className={s.wrapper}>
        <div className={s.twosBlock}>
          <div className={s.logoBlock}>
            <img src={logo} alt="logo" className={s.companyLogo} />
          </div>

          <div className={s.authBlock}>
            <img src={userLogin} alt="user" className={s.userLogin} />
            <p className={s.loginText}>{user.login}</p>
            <button className={s.burgerButton} onClick={toggleMenu}>
              <img src={burgerMenu} alt="menu" className={s.burgerMenu} />
              {showMenu && (
                <div className={s.menuItems}>
                  <li>
                    <a href="/sightseeing">🔵 Sightseeing</a>
                  </li>
                  <li>
                    <a href="/company">🔵 About Company</a>
                  </li>
                  <li>
                    <a href="/contacts">🔵 Contacts </a>
                  </li>
                </div>
              )}
            </button>
            <button onClick={onLogOut} className={s.logOut}>
              LogOut
            </button>
          </div>
        </div>
        <div className={s.innerText}>
          <h2 className={s.introText}>Flight to anywhere & anytime</h2>
        </div>
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
              type="date"
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

          <button className={s.searchButton} type="submit">
            Search
          </button>
          
        
        </form>
        <div className={s.results}>
          <div className={s.twoBlocking}>
        <ul className={s.resultBox}>
        {data.map((item, index) => (
          <li
            id={item.id}
            // key={item.id}
            key={`result-${index}-${item.id}`}
            onClick={() => handleResultClick(item)}
          >
            {item.iata_code}
          </li>
        ))}
      </ul>

      <ul className={s.resultBox}>
        {second.map((elem, index) => (
          <li
            id={elem.id}
            key={`second-${index}-${elem.id}`}
            onClick={() => handleSecond(elem)}
          >
            {elem.iata_code}
          </li>
        ))}
      </ul>
      </div>
      </div>
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
      <div className={s.textBlock}>
        <h2 className={s.slogan}>Popular right now</h2>
        <p className={s.description}>
          Other travellers are loving these destinations. Search flights,
          hotels, and car hire and join them on the adventure.
        </p>
      </div>
      <Cards  />
      <MainLogo className={s.position}/>
      <Footer className={s.position} />
      </div>
      </div>
    </>
  );
}

export default MainPage;
