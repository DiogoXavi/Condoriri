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
  PlayersAdmin,
  TeamDetail,
  PlayerDetail,
  TopScorerTable,
  Sponsors,
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
        <Route path="/sponsors" element={<Sponsors />} />
      </Route>
      <Route path="/team-detail" element={<TeamDetail />} />
      <Route path="/team-categories" element={<TeamCategories />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/table" element={<Table />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/equipos" element={<Equipos />} />
      <Route path="/notifications-admin" element={<NotificationsAdmin />} />
      <Route path="/players-admin" element={<PlayersAdmin />} />
      <Route path="/player-detail" element={<PlayerDetail />} />
      <Route path="/top-scorers-table" element={<TopScorerTable />} />
    </Routes>
  );
};

export default AppRouter;
