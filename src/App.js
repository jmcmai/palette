import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Friends from "./pages/Friends";
import Events from "./pages/Events";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/events" element={<Events />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
