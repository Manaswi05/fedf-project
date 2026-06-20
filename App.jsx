import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Counseling from "./pages/Counseling";
import StressManagement from "./pages/StressManagement";
import Admin from "./pages/Admin";

import Assessment from "./pages/Assessment";
import Awareness from "./pages/Awareness";
import SupportWall from "./pages/SupportWall";
import Emergency from "./pages/Emergency";
import Feedback from "./pages/Feedback";

import Navbar from "./components/Navbar";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/counseling" element={<Counseling />} />
        <Route path="/stress" element={<StressManagement />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/assessment" element={<Assessment />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/support" element={<SupportWall />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/counselor" element={<Counseling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;