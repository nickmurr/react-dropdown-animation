import React, { ReactNode, ReactNodeArray } from 'react';
import styles from './Navbar.module.css';

interface IProps {
  children: ReactNodeArray;
}

const Navbar = (props: IProps) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}>{props.children}</ul>
    </nav>
  );
};

export default Navbar;
