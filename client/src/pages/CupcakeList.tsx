import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface accessoryArrayProps {
  id: number;
  name: string;
  slug: string;
}

interface CupcakeProps {
  data: {
    id: number;
    accessory_id: string;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
  }[];
}
/* ************************************************************************* */
// const sampleCupcakes = [
// 	{
// 		id: 10,
// 		accessory_id: "4",
// 		accessory: "wcs",
// 		color1: "blue",
// 		color2: "white",
// 		color3: "red",
// 		name: "France",
// 	},
// 	{
// 		id: 11,
// 		accessory_id: "4",
// 		accessory: "wcs",
// 		color1: "yellow",
// 		color2: "red",
// 		color3: "black",
// 		name: "Germany",
// 	},
// 	{
// 		id: 27,
// 		accessory_id: "5",
// 		accessory: "christmas-candy",
// 		color1: "yellow",
// 		color2: "blue",
// 		color3: "blue",
// 		name: "Sweden",
// 	},
// ];

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes (with useEffect)
  const [cupcakes, setCupcakes] = useState<CupcakeProps["data"]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((cake) => setCupcakes(cake));
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<accessoryArrayProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((topping) => setAccessories(topping));
  });

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id}>{accessory.name}</option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cakes) => (
          <Cupcake data={cakes} key={cakes.id} />
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* <li className="cupcake-item"></li> */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
