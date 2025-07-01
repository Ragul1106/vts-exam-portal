import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const LayoutWithSidebar = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
