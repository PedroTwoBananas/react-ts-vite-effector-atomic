// import { useStore } from 'effector-react';
import React from 'react';
import { routes } from '../../routing';
import './Header.scss';

export const Header: React.FC = () => {
  // const homeOpened = useStore(routes.home.$isOpened);
  // const todoOpened = useStore(routes.todo.$isOpened);
  const navList = [
    {
      label: 'Дом',
      open: () => {
        routes.home.open();
      },
      key: 0
    },
    {
      label: 'Ежедневник',
      open: () => {
        routes.todo.open();
      },
      key: 1
    }
  ];
  return (
    <div>
      {navList.map(tab => <button className={'tab'} key={tab.key} onClick={tab.open}>{tab.label}</button>)}
    </div>
  );
};