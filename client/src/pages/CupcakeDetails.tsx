import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

interface cupcakeProps {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export default function CupcakeDetails() {
  const { id } = useParams();
  const [cupcakes, setCupcakes] = useState<cupcakesProps["cupcake"]>([]);
  const [cupcake, setCupcake] = useState<cupcakeProps | null>(null);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data))
      .catch((err) => console.error(err));
    cupcakes[Number(id)] !== undefined && setCupcake(cupcakes[Number(id)]);
  }, [cupcakes[Number(id)], id]);
  return <>{cupcake !== null && <Cupcake data={cupcake} />}</>;
}
