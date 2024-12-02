import Cupcake from "../components/Cupcake";
import { useState,useEffect } from "react";

interface CupcakesListProps {

      image:string
      name:string

};
/* ************************************************************************* */
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
type AccessoriesArray = {id:number;name:string;slug:string}[];
function CupcakeList() {

  const [cupcakes,setCupcakes] = useState([])
  const [dataAccessories,setDataAccessories]=useState<AccessoriesArray>([]);
  const [accessoriesChoice, setAccessoriesChoice] = useState("");
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
 .then((res) => res.json())
 .then((data) => setCupcakes(data))
 .catch((err) => console.error(err))
 },[]);

 fetch("http://localhost:3310/api/accessories")
 .then((response) => {
  if(!response.ok)
  {
    throw new Error ("Error fetching data from API");
  }
 return response.json();
})
.then((responseTojson) => {
  setDataAccessories(responseTojson);
  console.log(responseTojson)
})
.catch((error) => {
  console.error(error);
 },[]);
 const HandleChoice = (name :string) =>{
  console.log(name);
  setAccessoriesChoice(name);
}


  return (
    <>
      <main>
        {cupcakes.filter((item) =>accessoriesChoice === item.accessory)
        .map((cupcake) => (
          <Cupcake data={cupcake} key={cupcake.id}/>
        ))}
         </main>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{""}
          <select id="cupcake-select">
            {dataAccessories.map((accessories) => (
            <option value={accessories.id}>{accessories.name}</option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
      
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
         );
}

export default CupcakeList;
