import React, { ReactNode } from 'react';
import { nav_item } from './Navbar.module.css';
import useOnClickOutside from '../../hooks/useClickOutside';
import { withToggle } from '../../hoc/withToggle';

interface IProps {
  icon: ReactNode;
  children?: ReactNode;
  toggle?: any;
  open?: any;
  setOpen?: any;
}

interface IRef {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RefConsumer = React.createContext<IRef>({} as any);

const NavItem = (props: IProps) => {
  const ref = React.useRef<HTMLLIElement>(null);

  useOnClickOutside(ref, () => {
    props.setOpen(false);
  });

  return (
    <RefConsumer.Provider value={{ setOpen: props.setOpen }}>
      <li className={nav_item} ref={props.children ? ref : undefined}>
        <a href="#" className="icon-button" onClick={props.toggle}>
          {props.icon}
        </a>

        {props?.open && props.children}
      </li>
    </RefConsumer.Provider>
  );
};

export default withToggle(NavItem);
