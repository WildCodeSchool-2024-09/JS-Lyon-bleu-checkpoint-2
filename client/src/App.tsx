import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  const [cupcakes,setCupcakes] = useState([])
  useEffect(() => {

    fetch("http://localhost:3310/api/cupcakes")
 .then((res) => res.json())
 .then((data) => setCupcakes(data))
 .catch((err) => console.error(err))
 },[]);
 console.log(cupcakes)
  return (
    <>
      <main className="main-container">
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}

export default App;
