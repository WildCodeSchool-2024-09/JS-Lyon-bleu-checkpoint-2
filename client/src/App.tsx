import { Outlet } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import CupcakeList from "./pages/CupcakeList";

function App() {
  return (
    <>
      <main className="main-container">
      <CupcakeList />
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}

export default App;
