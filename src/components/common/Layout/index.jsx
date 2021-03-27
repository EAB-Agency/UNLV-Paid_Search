import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import '../../../styles/sass/styles.scss';
// import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
    </>
  );
};
