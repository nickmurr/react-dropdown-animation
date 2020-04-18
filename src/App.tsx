import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import NavItem from './components/navbar/NavItem';

import DropdownMenu from './components/dropdown/DropdownMenu';
import { CaretIcon, PlusIcon, BellIcon, MessengerIcon } from './icons/icons';

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
      </Navbar>
    </>
  );
}

export default App;
