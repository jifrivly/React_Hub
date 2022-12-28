import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from './Routes/Home/Navbar';

import './App.css';

function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
