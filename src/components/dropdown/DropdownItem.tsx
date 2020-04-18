import React, { ReactNode, ReactNodeArray } from 'react';
import style from './Dropdown.module.css';
import { icon_button } from './Dropdown.module.css';

interface IProps {
  children?: ReactNode | ReactNodeArray;
  leftIcon?: ReactNode | ReactNodeArray;
  rightIcon?: ReactNode | ReactNodeArray;
  goToMenu?: string;
  setActiveMenu?: (acivemenu: string) => void;
}

const DropdownItem = (props: IProps) => {
  const onMenu = (e: any) => {
    if (props.goToMenu && props.setActiveMenu) {
      props.setActiveMenu(props.goToMenu);
    }
  };

  return (
    <a href="#" className={style.menu_item} onClick={onMenu}>
      {props.leftIcon && (
        <span className={`icon-button ${style.icon_button}`}>
          {props.leftIcon}
        </span>
      )}

      {props.children}

      {props.rightIcon && (
        <span className={`icon-button ${style.icon_right}`}>
          {props.rightIcon}
        </span>
      )}
    </a>
  );
};

export default DropdownItem;
