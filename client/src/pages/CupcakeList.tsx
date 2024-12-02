import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface CupcakeData {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeData[]>([]);
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data: CupcakeData[]) => {
        setCupcakes(data);
      })
      .catch((err) => console.error(err));

    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data: AccessoryArray) => {
        setAccessories(data);
      })
      .catch((err) => console.error(err));
  }, []);
  const handleAccessoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedAccessory(event.target.value);
  };
  const filteredCupcakes = cupcakes.filter(
    (cupcake) =>
      selectedAccessory === "" || cupcake.accessory === selectedAccessory,
  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={handleAccessoryChange}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
