import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

interface OneCupcakeProps {
  id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

function CupcakeDetail() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState<OneCupcakeProps | null>(null);
  useEffect(() => {
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((res) => res.json())
      .then((data) => setCupcake(data));
  }, [id]);
  return (
    <>
      <h1>My cupcakes</h1>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcake !== null && (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        )}
      </ul>
    </>
  );
}

export default CupcakeDetail;
