import React,{useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Button from "../../components/Button"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

// import airAstana from "../../images/airastana.png"
import findIcon from "../../images/findicon.png";
import oneStopFlight from "../../images/onestop.png";
import MainPage from "../MainPage/MainPage";

import s from "./DirectionRoute.module.scss";
const endpoint =
  "https://skyscanner44.p.rapidapi.com/search";

function DirectionRoute() {

    const [response, setResponse] = useState("");
    const [id, setId] = useState("");
    // const [items, setItems] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const adults = searchParams.get("adults");
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const date = searchParams.get("departureDate");
    const currency = searchParams.get("currency");
    // console.log(response);
    // const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
  
    // const dispatch = useDispatch();
  
    // const onLogOut = () => {
    //   dispatch(logOut());
    // };
  
    
     useEffect(()=> {
        const getData = async () => {
            try {
                const response = await fetch(
                  `${endpoint}?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`,
                  {
                    method: "GET",
                    headers: {
                      "X-RapidAPI-Key":
                        "b0437280d1mshb124b9c5730dd71p157314jsnc158830aaf5e",
                        // if status 429 uncomment this
                        //   'X-RapidAPI-Key': 'd100136919msh272d5b04d6ac174p1bd629jsnadb7bac2073d', 
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
        }
        getData()
     },[adults, origin, destination, date, currency])
    
     const onSubmitPress = async (e, id) => {
        e.preventDefault();
        const response =   `${endpoint}?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`
        navigate(`/passenger?${response}?items?id${id}`)
        console.log(`${response}?items?0?id${id}`);
     }
     function toHoursAndMinutes(durationInMinutes) {
        const minutes = durationInMinutes % 60;
        const hours = Math.floor(durationInMinutes / 60);
      
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
      }
      function removeSpecial(character) {
        if(!character) return
        return character.replace(/[T]/g, " ", );
        // let withoutCharacter = character.replace(/[T-]/g, " ")
        // let withoutCharacter = character.split("T").join("")
        // let withoutCharacter = character.replaceAll("T", "").replaceAll("-", "")
        // return withoutCharacter;
        // return departure.replace("T", " ");
        // return arrival.replace(/[T-]/g, " ");
      }
    //   console.log(removeSpecial("2023-09-08T06:30:00"));
    // console.log(response[0].items[0].id);
    return(
        <>
        <Header/>
        
        <div className={s.wrapper}>
    
            <div className={s.directionNameBlock}>
            <img src={findIcon} alt="find" className={s.findIcon} />
                <h4 className={s.directionCity}> {response?.[0]?.items?.[0].legs[0].origin.city} - {response?.[0]?.items?.[0].legs[0].destination.city}</h4>
                <p className={s.date}>{date}</p>
                <span className={s.status}>Adult: {adults}</span>
            </div>
        </div>

                
                <div className={s.statusTicketBoxes}>
                <div className={s.ticketsBlock}>
                <div className={s.statusTicketBoxes}>
                <div className={s.bestFlight}>
                    <h6 className={s.ticketText}> {response?.[0]?.id}</h6>
                    </div>
                    </div>
                <div className={s.ticket}>
                    <div className={s.imageLogo}>
                <img src={response?.[0]?.items?.[0].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[0]?.items?.[0].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[0]?.items?.[0].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[0]?.items?.[0].legs[0].departure)}</h2>
                <h6>{response?.[0]?.items?.[0].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[0]?.items?.[0].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                {/* <p>1 stop SAW</p> */}
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[0]?.items?.[0].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[0]?.items?.[0].legs[0].arrival)}</h2>
                <h6>{response?.[0]?.items?.[0].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[0]?.items?.[0].price.formatted}</h6>
                {/* <Link to={`/passenger`} relative="path">  */}
                <Button className={s.selectButtons} onSubmit={onSubmitPress}>Select 1</Button>
                {/* </Link> */}
                </div>

                <div className={s.ticket}>
                 <div className={s.imageLogo}>
                <img src={response?.[0]?.items?.[1].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[0]?.items?.[1].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[0]?.items?.[1].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[0]?.items?.[1].legs[0].departure)}</h2>
                <h6>{response?.[0]?.items?.[1].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[0]?.items?.[1].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[0]?.items?.[1].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[0]?.items?.[1].legs[0].arrival)}</h2>
                <h6>{response?.[0]?.items?.[1].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[0]?.items?.[1].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[0]?.items?.[2].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[0]?.items?.[2].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[0]?.items?.[2].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[0]?.items?.[2].legs[0].departure)}</h2>
                <h6>{response?.[0]?.items?.[2].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[0]?.items?.[2].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[0]?.items?.[2].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[0]?.items?.[2].legs[0].arrival)}</h2>
                <h6>{response?.[0]?.items?.[2].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[0]?.items?.[2].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.statusTicketBoxes}>
                <div className={s.cheapFlight}>
                    <h6 className={s.ticketText}> {response?.[1]?.id}</h6>
                    </div>
                    </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[1]?.items?.[0].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[1]?.items?.[0].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                <h2 className={s.departureTime}>{removeSpecial(response?.[1]?.items?.[0].legs[0].departure)}</h2>
                {/* <h2 className={s.departureTime}>{response?.[1]?.items?.[0].legs[0].departure}</h2> */}
                <h6>{response?.[1]?.items?.[0].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[1]?.items?.[0].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[1]?.items?.[0].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[1]?.items?.[0].legs[0].arrival)}</h2>
                <h6>{response?.[1]?.items?.[0].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[1]?.items?.[0].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[1]?.items?.[1].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[1]?.items?.[1].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[1]?.items?.[1].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[1]?.items?.[1].legs[0].departure)}</h2>
                <h6>{response?.[1]?.items?.[1].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[1]?.items?.[1].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[1]?.items?.[1].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[1]?.items?.[1].legs[0].arrival)}</h2>
                <h6>{response?.[1]?.items?.[1].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[1]?.items?.[1].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>
                
                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[1]?.items?.[2].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[1]?.items?.[2].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[1]?.items?.[2].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[1]?.items?.[2].legs[0].departure)}</h2>
                <h6>{response?.[1]?.items?.[2].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[1]?.items?.[2].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[1]?.items?.[2].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[1]?.items?.[2].legs[0].arrival)}</h2>
                <h6>{response?.[1]?.items?.[2].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[1]?.items?.[2].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.statusTicketBoxes}>
                <div className={s.fastFlight}>
                    <h6 className={s.ticketText}> {response?.[2]?.id}</h6>
                    </div>
                    </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[2]?.items?.[0].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[2]?.items?.[0].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[2]?.items?.[0].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[2]?.items?.[0].legs[0].departure)}</h2>
                <h6>{response?.[2]?.items?.[0].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[2]?.items?.[0].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[2]?.items?.[0].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[2]?.items?.[0].legs[0].arrival)}</h2>
                <h6>{response?.[2]?.items?.[0].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[2]?.items?.[0].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[2]?.items?.[1].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[2]?.items?.[1].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[2]?.items?.[1].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[2]?.items?.[1].legs[0].departure)}</h2>
                <h6>{response?.[2]?.items?.[1].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[2]?.items?.[1].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[2]?.items?.[1].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[2]?.items?.[1].legs[0].arrival)}</h2>
                <h6>{response?.[2]?.items?.[1].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[2]?.items?.[1].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[2]?.items?.[2].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[2]?.items?.[2].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[2]?.items?.[2].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[2]?.items?.[2].legs[0].departure)}</h2>
                <h6>{response?.[2]?.items?.[2].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[2]?.items?.[2].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[2]?.items?.[2].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[2]?.items?.[2].legs[0].arrival)}</h2>
                <h6>{response?.[2]?.items?.[2].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[2]?.items?.[2].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>


                <div className={s.statusTicketBoxes}>
                <div className={s.directFlight}>
                    <h6 className={s.ticketText}> {response?.[3]?.id}</h6>
                    </div>
                    </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[3]?.items?.[0].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[3]?.items?.[0].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[3]?.items?.[0].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[3]?.items?.[0].legs[0].departure)}</h2>
                <h6>{response?.[3]?.items?.[0].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[3]?.items?.[0].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[3]?.items?.[0].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[3]?.items?.[0].legs[0].arrival)}</h2>
                <h6>{response?.[3]?.items?.[0].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[3]?.items?.[0].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[3]?.items?.[1].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[3]?.items?.[1].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[3]?.items?.[1].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[3]?.items?.[1].legs[0].departure)}</h2>
                <h6>{response?.[3]?.items?.[1].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[3]?.items?.[1].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[3]?.items?.[1].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[3]?.items?.[1].legs[0].arrival)}</h2>
                <h6>{response?.[3]?.items?.[1].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[3]?.items?.[1].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                <div className={s.ticket}>
                <div className={s.imageLogo}>
                <img src={response?.[3]?.items?.[2].legs[0].carriers.marketing[0].logoUrl} alt="air_astana" className={s.airAstanaLogo} />
                <p className={s.imageInnerText}> {response?.[3]?.items?.[2].legs[0].segments[0].marketingCarrier.name}</p>
                </div>
                <div className={s.departure}>
                {/* <h2 className={s.departureTime}>{response?.[3]?.items?.[2].legs[0].departure}</h2> */}
                <h2 className={s.departureTime}>{removeSpecial(response?.[3]?.items?.[2].legs[0].departure)}</h2>
                <h6>{response?.[3]?.items?.[2].legs[0].origin.city}</h6>
                </div> 
                <div className={s.stops}>
                <p>{toHoursAndMinutes(response?.[3]?.items?.[2].legs[0].durationInMinutes)}</p>
                <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
                </div>
                <div className={s.arrival}>
                {/* <h2 className={s.arrivalTime}>{response?.[3]?.items?.[2].legs[0].arrival}</h2> */}
                <h2 className={s.arrivalTime}>{removeSpecial(response?.[3]?.items?.[2].legs[0].arrival)}</h2>
                <h6>{response?.[3]?.items?.[2].legs[0].destination.city}</h6>
                </div>
                <h6 className={s.price}>{response?.[3]?.items?.[2].price.formatted}</h6>
                <Button className={s.selectButtons}>Select</Button>
                </div>

                </div>
                </div>
                <Footer/>
        </>
    )
}
export default DirectionRoute;