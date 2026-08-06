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
  Equipos,
  Notifications,
  NotificationsAdmin,
} from "../pages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Search />}>
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/call-up" element={<CallUp />} />
        <Route path="/playoffs" element={<PlayOffs />} />
      </Route>
      <Route path="/team-categories" element={<TeamCategories />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/table" element={<Table />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/equipos" element={<Equipos />} />
      <Route path="/notifications-admin" element={<NotificationsAdmin />} />
    </Routes>
  );
};

export default AppRouter;
