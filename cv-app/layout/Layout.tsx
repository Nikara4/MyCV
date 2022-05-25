import React from 'react';

import { Footer, Header } from '../components';
import { Theme } from './styled';

export const Layout = ({ children }: any) => {
  return (
    <>
    <Header />
    <Theme>
      <main>{children}</main>
      <Footer />
    </Theme>
    </>
  );
};
