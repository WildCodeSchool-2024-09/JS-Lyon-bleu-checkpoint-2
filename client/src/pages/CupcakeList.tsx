import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

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
  const [accessories, setAccessories] = useState<
    accessoriesProps["accessorie"]
  >([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error(err));
  }, []);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
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
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {selectedFilter === ""
          ? cupcakes?.map((cupcake) => (
              <Link to={`/cupcakes/${cupcake.id}`} key={cupcake.id}>
                <li className="cupcake-item">
                  <Cupcake data={cupcake} />
                </li>
              </Link>
            ))
          : cupcakes
              .filter(
                (choosenCupcake) => choosenCupcake.accessory === selectedFilter,
              )
              .map((cupcake) => (
                <Link to={`/cupcakes/${cupcake.id}`} key={cupcake.id}>
                  <li className="cupcake-item">
                    <Cupcake data={cupcake} />
                  </li>
                </Link>
              ))}
      </ul>
    </>
  );
}

export default CupcakeList;
