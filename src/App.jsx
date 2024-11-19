import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Appointment } from "./components/Appointment";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { Overview } from "./components/Overview";
import { Health } from "./components/Health";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="/health" element={<Health />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
