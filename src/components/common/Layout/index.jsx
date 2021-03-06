import React, { useContext } from 'react';
import '@fontsource/lato/400.css';
import '@fontsource/lato/900.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/800.css';
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import '../../../styles/sass/styles.scss';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
    </>
  );
};
