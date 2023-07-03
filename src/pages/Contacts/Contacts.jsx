import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import s from "./Contacts.module.scss"
function Contacts(){
    const myGeoObject = {
        geometry: {
          type: 'Point',
          coordinates: [43.239206, 76.905212],
        },
        properties: {
          balloonContent: 'My Custom Geo Object',
        },
      };
    
    return(
        <>
        <Header />
        <div className={s.textBlock}>
        <h2 className={s.mainText}>Company details:</h2>
        <h3 className={s.secondText}>Address: 050000, Republic of Kazakhstan,<br />
        Almaty city, Abay 68 str., 105 office</h3>
        <h3 className={s.secondText}>Phone: +7 700 123 45 67</h3>
        <h3 className={s.secondText}>Email: airscanner@gmail.com</h3>
        <h3 className={s.secondText}>Location:</h3>
        </div>
        <YMaps query={{ lang: 'ru_RU', load: 'package.full', ns: 'ymaps', apikey: 'a05852af-8a01-4215-8218-28ce0b5eee42'}}>
      <div className={s.map}>
        <Map
          defaultState={{ center: [43.239206, 76.905212], zoom: 17 }}
          style={{ width: '50%', height: '400px', margin: "0 auto" }}
          
        >
        <Placemark geometry={myGeoObject.geometry} properties={myGeoObject.properties} />
        </Map>

      </div>
    </YMaps>

        <Footer/>
        </>
    )
}
export default Contacts;