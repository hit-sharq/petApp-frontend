import { Routes, Route, Outlet } from "react-router-dom";
import { Appointment } from "./components/Appointment";
import { Navbar } from "./components/Navbar";

import "./App.css";
import "./index.css";
import { Overview } from "./components/Overview";
import { Health } from "./components/Health";
import { Login } from "./components/Login";
import { AddPet } from "./components/Addpet";
import { Community } from "./components/Community";
import { MakeAppointment } from "./components/MakeAppointment";
import { SignUp } from "./components/SignUp";
import { ProfilePage } from "./components/ProfilePage";


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
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/overview" element={<Overview />} />
        <Route path="/health" element={<Health />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/addpet" element={<AddPet/>} />
        <Route path="/makeAppointment" element={<MakeAppointment/>} />
        <Route path="profilePage" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
