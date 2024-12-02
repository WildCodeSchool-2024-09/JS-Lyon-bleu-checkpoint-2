import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CupcakeList from "./pages/CupcakeList";
import NavBar from "./components/NavBar";
import Cupcake from "./components/Cupcake";

export default function App() {
  return (
    <>
      <main className="main-container">
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}
