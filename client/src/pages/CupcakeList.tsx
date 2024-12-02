import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
// type CupcakeArray = typeof sampleCupcakes;
interface cupcakeProps {
  id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes (with useEffect)
  const [cupcakes, setCupcakes] = useState<cupcakeProps[]>([]);
  const [access, setAcces] = useState<cupcakeProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setCupcakes(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAcces(data));
  }, []);

  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            {access.map((cupcake) => (
              <option value="" key={cupcake.id}>
                {cupcake.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} key={cupcake.id} />
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
