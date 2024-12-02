import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

interface cupcakeProps {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

function CupcakeDetails() {
  const [cupcake, setCupcake] = useState<cupcakeProps | null>(null);
  const [cupcakes, setCupcakes] = useState<cupcakeProps[] | []>([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data));
    if (typeof cupcakes[Number(id) - 1] !== "undefined") {
      setCupcake(cupcakes[Number(id) - 1]);
    }
  }, [id, cupcakes[Number(id)]]);
  return (
    <>
      {cupcake === null ? (
        <p>Nothing to see here</p>
      ) : (
        <Cupcake data={cupcake} />
      )}
    </>
  );
}

export default CupcakeDetails;
