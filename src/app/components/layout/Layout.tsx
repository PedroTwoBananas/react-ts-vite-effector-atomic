import React, { ReactNode } from 'react';
import { Header } from '../header/Header';

interface LayoutProp {
  children: ReactNode
}

export const Layout: React.FC<LayoutProp> = ({ children }) => (
  <div>
    <Header/>

    <div>
      {children}
    </div>
  </div>
);