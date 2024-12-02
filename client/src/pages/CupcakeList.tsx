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

type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [data, setData] = useState<CupcakeArray>([]);
  const [dataAccessories, setDataAccessories] = useState<AccessoryArray>([]);
  const [accessoriesChoice, setAccessoriesChoice] = useState("");

  // Step 1: get all cupcakes (with useEffect)
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data from API");
        }
        return response.json();
      })
      .then((responseTojson) => {
        setData(responseTojson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data from API");
        }
        return response.json();
      })
      .then((responseTojson) => {
        setDataAccessories(responseTojson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const HandleChoice = (name: string) => {
    setAccessoriesChoice(name);
  };

  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(eachSelection) =>
              HandleChoice(eachSelection.target.value)
            }
          >
            {dataAccessories.map((accessories) => (
              <option value={accessories.slug} key={accessories.id}>
                {accessories.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      {accessoriesChoice
        ? data
            .filter((item) => accessoriesChoice === item.accessory)
            .map((eachCupcake) => (
              <div key={eachCupcake.id}>
                <ul className="cupcake-list" id="cupcake-list">
                  {/* Step 2: repeat this block for each cupcake */}
                  {/* Step 5: filter cupcakes before repeating */}
                  <li className="cupcake-item">
                    <Cupcake data={eachCupcake} />
                  </li>

                  {/* end of block */}
                </ul>
              </div>
            ))
        : data.map((eachCupcake) => (
            <div key={eachCupcake.id}>
              <ul className="cupcake-list" id="cupcake-list">
                {/* Step 2: repeat this block for each cupcake */}
                {/* Step 5: filter cupcakes before repeating */}
                <li className="cupcake-item">
                  <Cupcake data={eachCupcake} />
                </li>

                {/* end of block */}
              </ul>
            </div>
          ))}
    </>
  );
}

export default CupcakeList;
