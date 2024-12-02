import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface Accessory {
  id: number;
  name: string;
  slug: string;
}
interface CupcakeList {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

function CupcakeList() {
  // Step 1: get all cupcakes (with useEffect)
  const [cupcakes, setCupcakes] = useState<CupcakeList[]>([]);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);

  const handleAccessoryFilter = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedAccessory(event.target.value);
  };

  const Cupcakesfiltered = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
    : cupcakes;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={handleAccessoryFilter}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id.toString()}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {Cupcakesfiltered.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
