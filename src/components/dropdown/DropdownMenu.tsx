import React, { ReactNode } from 'react';
import style from './Dropdown.module.css';
import DropdownItem from './DropdownItem';
import {
  CogIcon,
  ChevronIcon,
  ArrowIcon,
  BoltIcon,
  BellIcon,
  CaretIcon,
  MessengerIcon,
  PlusIcon,
} from '../../icons/icons';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = React.useState('main');
  const [menuHeight, setMenuHeight] = React.useState();

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const timeOut = 200;

  return (
    <div className={style.dropdown} style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={timeOut}
        unmountOnExit
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={timeOut}
        unmountOnExit
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<ArrowIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          ></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Bolt</DropdownItem>
          <DropdownItem leftIcon={<ChevronIcon />}>Chevron</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Cog</DropdownItem>
          <DropdownItem leftIcon={<BellIcon />}>Bell</DropdownItem>
          <DropdownItem leftIcon={<CaretIcon />}>Carret</DropdownItem>
          <DropdownItem leftIcon={<MessengerIcon />}>Messanger</DropdownItem>
          <DropdownItem leftIcon={<PlusIcon />}>Plus</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
