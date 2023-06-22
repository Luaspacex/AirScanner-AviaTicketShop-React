import React,{useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import image from "../../images/airastana.png"
import oneStopFlight from "../../images/onestop.png"
import DirectionRoute from "../DirectionRoute"
import s from "./FormTicket.module.scss"
function FormTicket (){
    const [response, setResponse] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState("");
    const adults = searchParams.get("adults");
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const date = searchParams.get("departureDate");
    const currency = searchParams.get("currency");

  //   const endpoint =
  // `${endpoint}?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`;
  //   useEffect(()=> {
  //       const getData = async () => {
  //           try {
  //               const response = await fetch(
  //                 `${response}?id${id}`,
  //                 {
  //                   method: "GET",
  //                   headers: {
  //                     "X-RapidAPI-Key":
  //                       "567555ec4cmsh0061ec1aa26d0d8p1e9c52jsn292daed32b69",
  //                     "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
  //                     "Content-Type": "application/json",
  //                   },
  //                 }
  //               );
  //               const data = await response.json();
  //               setResponse(data.itineraries.buckets);
  //               // console.log(data.itineraries.buckets);
  //             } catch (error) {
  //               return error;
  //             }
  //       }
  //       getData()
  //    },[response])
  //   console.log(response);
    return(
        <>
        <Header/>
        <div className={s.ticket}>
                    <div className={s.imageLogo}>
                <img src={image} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}>Air Astana </p>
                </div>
                <div className={s.departure}>
                <h2 className={s.departureTime}>2023.09.08</h2>
                <h6>Almaty</h6>
                </div> 
                <div className={s.stops}>
                <p>6h 30m</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                <h2 className={s.arrivalTime}> 2023.09.08</h2>
                <h6 className={s.arrivalTime}>Istanbul</h6>
                </div>
                <h6 className={s.price}>T 101 653</h6>
                </div>

        <form className={s.passengerForm} 
        // onSubmit={onPassengerForm} 
        >
            <div className={s.main}>
        <div className={s.name_group}>
        <label> Name:</label>
        <input type="text" name="passenger_name"  className={s.name} placeholder="John" />
        </div>
        <div className={s.surname_group}>
        <label> Surname:</label>
        <input type="text" name="passenger_surname"  className={s.surname} placeholder="Walker" />
        </div>
        <div className={s.email_group}>
        <label> Email:</label>
        <input type="email" name="passenger_email"  className={s.email} placeholder="john.walker@email.com" />
        </div>
        <div className={s.phone_group}>
        <label>Phone number:</label>
        <input type="tel" name="passenger_phone"  className={s.phone} placeholder="498-348-3872" />
        </div>
        <div className={s.birthday_group}>
        <label>Birthday date:</label>
        <input type="date" name="passenger_birthday"  className={s.birthday} placeholder="year month date" />
        </div>
        <div className={s.passport_group}>
        <label>Passport Number:</label>
        <input type="passport" name="passenger_passport"  className={s.passport} placeholder="N31195855" />
        </div>
        <Button className={s.submit}>Submit</Button>
        </div>
        </form>
        <Footer/>
        </>
    )
}
export default FormTicket;