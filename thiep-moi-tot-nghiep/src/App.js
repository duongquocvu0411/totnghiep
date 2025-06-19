import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InvitationCard from "./components/InvitationCard";
import WishesList from "./components/WishesList";

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang mặc định */}
        <Route path="/" element={<InvitationCard />} />

        {/* Trang xem lời chúc */}
        <Route path="/wishes" element={<WishesList />} />
      </Routes>
    </Router>
  );
}

export default App;
