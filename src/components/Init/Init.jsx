// import React from "react";

// function Init(){
//     ymaps.ready(init);
//     function init(ymaps){
//         // Создание карты.
//         let myMap = new ymaps.Map("map", {
//             // Координаты центра карты.
//             // Порядок по умолчанию: «широта, долгота».
//             // Чтобы не определять координаты центра карты вручную,
//             // воспользуйтесь инструментом Определение координат.
//             center: [43.238332, 76.923358],
//             // Уровень масштабирования. Допустимые значения:
//             // от 0 (весь мир) до 19.
//             zoom: 17
//         });
    
    
//         let myGeoObject = new ymaps.GeoObject({
//             geometry: {
//                 type: "Point", // тип геометрии - точка
//                 coordinates: [43.238332, 76.923358] // координаты точки
//             }
//         });
//         myMap.geoObjects.add(myGeoObject);
//     }
// }
// export default Init;