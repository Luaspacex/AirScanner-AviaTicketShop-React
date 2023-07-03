import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header/Header";
import SelectTicket from "../../pages/SelectTicket";
import Footer from "../../components/Footer";
import Tickets from "../../components/Tickets/Tickets";
import findIcon from "../../images/searchLogo.png";
import oneStopFlight from "../../images/onestop.png";
import MainPage from "../MainPage/MainPage";
import s from "./DirectionRoute.module.scss";

const endpoint = "https://skyscanner44.p.rapidapi.com/search";
const linkpoint = process.env.REACT_APP_ENDPOINT || "";
function DirectionRoute() {
  const [response, setResponse] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const adults = searchParams.get("adults");
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const date = searchParams.get("departureDate");
  const currency = searchParams.get("currency");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(
        `${endpoint}?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "45c4fd38f8msh1b2705da7db2a9bp187a00jsn71edf10609ee",
            "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setResponse(data.itineraries.buckets);
      console.log(data.itineraries.buckets);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getData();
  }, [adults, origin, destination, date, currency]);

  const getUserData = async () => {
    const userRequest = await fetch(
      `${linkpoint}/users/${localStorage.getItem("userId")}`
    );
    const data = await userRequest.json();
    console.log(data);
    setUserData(data);
    let cart = userData.cart;
  };
  useEffect(() => {
    getUserData();
  }, []);

  function toHoursAndMinutes(durationInMinutes) {
    const minutes = durationInMinutes % 60;
    const hours = Math.floor(durationInMinutes / 60);
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }

  function removeSpecial(character) {
    if (!character) return;
    return character.replace(/[T]/g, " ").replace(/:00$/, "");
  }

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <div className={s.twoBlocks}>
          <div className={s.directionNameBlock}>
            <img src={findIcon} alt="find" className={s.findIcon} />
            <h4 className={s.directionCity}>
              {" "}
              {response?.[0]?.items?.[0].legs[0].origin.city} -{" "}
              {response?.[0]?.items?.[0].legs[0].destination.city}
            </h4>
            <p className={s.date}>{date}</p>
            <span className={s.status}>{adults} adult</span>
          </div>

          <div className={s.statusTicketBoxes}>
            <div className={s.ticketsBlock}>
              {response &&
                response?.map((category) => (
                  <div className={s.category} key={category.id}>
                    <div className={s.statusTicketBoxes}>
                      <div
                        className={s.bestFlight}
                        id={category.id}
                        key={category.id}
                      >
                        {category.id}{" "}
                      </div>
                    </div>
                    {category?.items?.map((ticket) => (
                      <Tickets
                        id={ticket.id}
                        key={ticket.id}
                        className={s.ticket}
                        price={ticket.price.formatted}
                        origin={ticket.legs[0].origin.city}
                        destination={ticket.legs[0].destination.city}
                        durationInMinutes={toHoursAndMinutes(
                          ticket.legs[0].durationInMinutes
                        )}
                        departure={removeSpecial(ticket.legs[0].departure)}
                        logoUrl={ticket.legs[0].carriers.marketing[0].logoUrl}
                        marketingCarrier={
                          ticket.legs[0].segments[0].marketingCarrier.name
                        }
                        arrival={removeSpecial(ticket.legs[0].arrival)}
                        getUserData={userData}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default DirectionRoute;
