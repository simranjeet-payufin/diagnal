/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Movies } from './pages/Movies/Loadable';

// export function useDarkSide() {
//   const [theme, setTheme] = useState(localStorage.theme);
//   const colorTheme = theme === 'dark' ? 'light' : 'dark';

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove(colorTheme);
//     root.classList.add(theme);
//     localStorage.setItem('theme', theme);
//   }, [theme, colorTheme]);

//   return [colorTheme, setTheme];
// }

export function App() {
  const { i18n } = useTranslation();
  // const [darkToggle, setDarkToggle] = React.useState(true);
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  React.useEffect(() => {
    localStorage.setItem('theme', 'dark');
  }, []);

  // const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false,
  );

  // const toggleDarkMode = checked => {
  //   setTheme(colorTheme);
  //   setDarkSide(checked);
  // };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, []);

  return (
    <div
    // className={`dark`}
    //${darkToggle && 'dark'}
    >
      <BrowserRouter basename="/diagnal">
        <Helmet
          titleTemplate="%s - Workshop"
          defaultTitle="Workshop"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="Workshop" />
        </Helmet>

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <GlobalStyle /> */}
      </BrowserRouter>
    </div>
  );
}
