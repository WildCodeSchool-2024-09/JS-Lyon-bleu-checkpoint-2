import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

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
interface cupcakeProps {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

interface accessoryProps {
  id: number;
  name: string;
  slug: string;
}
/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakeList, setCupcakeList] = useState<cupcakeProps[] | []>([]);
  const [accessories, setAccessories] = useState<accessoryProps[] | []>([]);
  const [filter, setFilter] = useState<string>("");
  // Step 1: get all cupcakes (with useEffect)
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakeList(data));
  });
  // Step 3: get all accessories
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  });

  // Step 5: create filter state
  const FilterArray = (cupcakeList: cupcakeProps[], filter: string) => {
    const cupcakeFiltered = [];
    if (filter !== "") {
      for (const cupcake of cupcakeList) {
        if (cupcake.accessory_id === filter) {
          cupcakeFiltered.push(cupcake);
        }
      }
    } else {
      return cupcakeList;
    }
    return cupcakeFiltered;
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option value={accessory.id} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakeList.length > 1 ? (
          FilterArray(cupcakeList, filter).map((cupcake) => (
            <li className="cupcake-item" key={cupcake.id}>
              <Cupcake data={cupcake} />
            </li>
          ))
        ) : (
          <p>Une erreur est survenue</p>
        )}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
