import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};

export default Dashboard;