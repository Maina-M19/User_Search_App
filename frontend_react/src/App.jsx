import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const UserDetail = lazy(() => import("./pages/UserDetail"));

const App = () => (
  <Router>
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;