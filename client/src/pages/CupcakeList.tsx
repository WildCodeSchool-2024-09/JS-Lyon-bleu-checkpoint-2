import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
/* ************************************************************************* */
// const sampleCupcakes = [
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   },
// ];

// type CupcakeArray = typeof sampleCupcakes;

interface cupcakesProps {
  cupcake: {
    id: number;
    accessory_id: string;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
  }[];
}

interface accessoriesProps {
  accessorie: {
    id: number;
    name: string;
    slug: string;
  }[];
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<cupcakesProps["cupcake"]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data))
      .catch((err) => console.error(err));
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<
    accessoriesProps["accessorie"]
  >([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);
  console.info(accessories);

  // Step 5: create filter state
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by
          <select
            id="cupcake-select"
            value={selectedFilter}
            onChange={handleChange}
          >
            <option value="">Please choose your accessorie </option>
            {accessories?.map((accessorie) => (
              <option value={accessorie.slug} key={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {selectedFilter === ""
          ? cupcakes?.map((cupcake) => (
              <li className="cupcake-item" key={cupcake.id}>
                <Cupcake data={cupcake} />
              </li>
            ))
          : cupcakes
              .filter(
                (choosenCupcake) => choosenCupcake.accessory === selectedFilter,
              )
              .map((cupcake) => (
                <li className="cupcake-item" key={cupcake.id}>
                  <Cupcake data={cupcake} />
                </li>
              ))}

        {/* */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
