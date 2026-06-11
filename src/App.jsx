import React from "react";
import Navbar from "./components/Navbar";
import StreakCard from "./components/StreakCard/StreakCard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Calender from "./pages/Calender";
import Store from "./pages/Store";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
};

export default App;
