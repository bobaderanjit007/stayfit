// import React, { useState } from "react";
// import { CustomInput } from "../helpers/Forms/FormCustomComponents";
// import { UI } from "../helpers";

// const Error = () => {
//   const [place, setPlace] = useState("");
//   const [placeData, setPlaceData] = useState([]);
//   const [placeDetails, setPlaceDetails] = useState([]);

//   const pincodeOptions = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "92824df217msh4d3991e2ffa3ff1p1febc0jsn13190cee4820",
//       "x-rapidapi-host": "india-pincode-api.p.rapidapi.com",
//     },
//   };
//   const placesOptions = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "92824df217msh4d3991e2ffa3ff1p1febc0jsn13190cee4820",
//       "x-rapidapi-host": "google-map-places.p.rapidapi.com",
//     },
//   };
//   async function getPlace() {
//     try {
//       const url = `https://google-map-places.p.rapidapi.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=all&language=en`;

//       const response = await fetch(url, placesOptions);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       if (data.status == "OK") setPlaceData(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
//   async function getPinCode(village, city) {
//     try {
//       const url = `https://india-pincode-api.p.rapidapi.com/v1/in/places/pincode/Aurangabad`;

//       const response = await fetch(url, pincodeOptions);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       if (data.status == "OK") setPlaceDetails(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   return (
//     <div className="w-[80vw] h-[80vh] flex justify-center items-center">
//       {/* 404 page not found */}
//       <div>
//         <div className="flex mb-4">
//           <CustomInput
//             label="Search Place"
//             onChange={(e) => setPlace(e.target.value)}
//             value={place}
//           />
//           <UI.Button onClick={getPlace} buttonText={"Search"} />
//         </div>

//         <ul>
//           {placeData.candidates &&
//             placeData.candidates.map((candidate) => {
//               return (
//                 <li
//                   key={candidate.place_id}
//                   className="cursor-pointer"
//                   onClick={() => {
//                     const address = candidate.formatted_address.split(", ");

//                     getPinCode(address[0], address[1]);
//                   }}
//                 >
//                   <p>{candidate.formatted_address}</p>
//                 </li>
//               );
//             })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Error;
