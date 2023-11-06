/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

// COMPONENTS
import Home from "./components/Home";
import TravelList from "./components/TravelList/TravelList";
import EatAndSplit from "./components/EatAndSplit/EatAndSplit";

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travellist" element={<TravelList />} />
        <Route path="/eatandsplit" element={<EatAndSplit />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
