import { useEffect } from "react";
import { useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

interface CupcakeProps {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
  id: number;
}

interface CupcakeAccessories {
  id: number;
  name: string;
  slug: string;
}

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList(): JSX.Element {
  const [cupcakes, setCupcakes] = useState<CupcakeProps[]>([]);
  const [accessories, setAccessories] = useState<CupcakeAccessories[]>([]);
  // const [selectedValue, setSelectedValue] = useState("");

  //
  // Step 1: get all cupcakes (with useEffect)
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((cupcake) => setCupcakes(cupcake))
      .catch((error) => console.log(error));
  }, []);

  // Step 3: get all accessories

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((accessories) => setAccessories(accessories))
      .catch((error) => console.log(error));
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
        {cupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

// C'etait plus facile le Pokédex, j'ai révisé le pokédex TOUT le WE mais ça n'a pas suffit :/
// Abandon à 12h32

export default CupcakeList;
