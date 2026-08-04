import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "../layouts";
import {
  Home,
  About,
  Teams,
  Fixture,
  Table,
  CallUp,
  Dashboard,
  PlayOffs,
  TeamCategories,
} from "../pages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Search />}>
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/call-up" element={<CallUp />} />
        <Route path="/playoffs" element={<PlayOffs />} />
      </Route>
      <Route path="/team-categories" element={<TeamCategories />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/table" element={<Table />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
