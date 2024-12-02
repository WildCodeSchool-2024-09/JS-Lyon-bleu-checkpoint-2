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
  }, []);

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
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cakes) => (
          <li key={cakes.id} className="cupcake-item">
            <Cupcake data={cakes} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default CupcakeList;
