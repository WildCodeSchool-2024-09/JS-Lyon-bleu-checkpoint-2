import Cupcake from "../components/Cupcake";
import { useEffect, useState } from "react";

const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
    slug: "france-blue-white-red",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
    slug: "germany-yellow-red-black",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
    slug: "sweden-yellow-blue-blue",
  },
];

// Type pour les cupcakes
interface CupcakeListProps {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
  slug: string;
}

export default function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeListProps[]>([]);
  const [accessories, setAccessories] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data))
      .catch((err) => console.error("Error fetching cupcakes:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.error("Error fetching accessories:", err));
  }, []);

  // Filtrer les cupcakes par slug
  const filteredCupcakes = cupcakes.filter((cupcake) =>
    filter ? cupcake.slug?.includes(filter) : true
  );

  return (
    <>
      <main>
        <h1>My Cupcakes</h1>
        {/* Formulaire de filtrage */}
        <form className="center">
          <label htmlFor="cupcake-select">
            Filter by{" "}
            <select
              id="cupcake-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">---</option>
              {accessories.map((accessory) => (
                <option key={accessory.slug} value={accessory.slug}>
                  {accessory.name}
                </option>
              ))}
            </select>
          </label>
        </form>

        {/* Liste des cupcakes */}
        <ul className="cupcake-list">
          {filteredCupcakes.length > 0 ? (
            filteredCupcakes.map((cupcake) => (
              <li key={cupcake.id} className="cupcake-item">
                <Cupcake data={cupcake} />
              </li>
            ))
          ) : (
            <p>No cupcakes found.</p>
          )}
        </ul>
      </main>
    </>
  );
}
