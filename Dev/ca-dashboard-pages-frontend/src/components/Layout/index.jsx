import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './styles.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import MySituation from '../../modules/MySituation';
import HomePage from '../../modules/HomePage';
import Footer from '../Footer';
import MyAdvice from '../../modules/MyAdvice';
import MyFinancials from '../../modules/MyFinancials';
import Profile from '../Profile';
import Settings from '../../modules/Settings';
import useWindow from '../../hooks/useWindow';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actions/profile';
import { getCurrentUser } from '../../helpers/helpers';
import { refreshToken } from '../../redux/actions/users';

const Layout = () => {
  const [navbarTitle, setNavbarTitle] = useState('Dashboard');
  const [rendered, setRendered] = useState(null);
  const { pathname } = useLocation();
  const windowSize = useWindow();
  const isMobileView = windowSize < 1024;
  const [openSidebar, setOpenSidebar] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rendered) setRendered(true);
    const intervalRefreshToken = setInterval(() => {
      dispatch(refreshToken());
    }, 1000000);

    return () => {
      clearInterval(intervalRefreshToken);
    };
  }, []);

  useEffect(() => {
    if (rendered) {
      dispatch(getProfile());
    }
  }, [rendered]);

  useEffect(() => {
    if (isMobileView) {
      setOpenSidebar(false);
    }
  }, []);

  const getNavBarTitleValue = (value) => {
    if (haveNestedSubMenu()) {
      const parentNode = pathname.split('/')[1].toUpperCase();
      return setNavbarTitle(`${parentNode} - ${value}`);
    }
    setNavbarTitle(value);
  };

  const haveNestedSubMenu = () => {
    return pathname.split('/').length > 2;
  };

  const contentClassName =
    pathname === '/'
      ? 'content d-flex flex-column set-height'
      : 'content d-flex flex-column';

  return (
    <div className="layout-wrapper d-flex flex-wrap full-height">
      {openSidebar && <Sidebar setNavbarTitle={getNavBarTitleValue} />}
      <div className="right-col">
        <Navbar
          title={navbarTitle}
          isMobileView={isMobileView}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <div className={contentClassName}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/post/*" element={<MySituation />} />
            <Route path="/advice/*" element={<MyAdvice />} />
            <Route path="/financials" element={<MyFinancials />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account-settings" element={<Settings />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
