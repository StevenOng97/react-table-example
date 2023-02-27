import React, { useState } from 'react';
import './styles.scss';
import avatar from '../../assets/images/Navbar/5.png';
import Notifications from '../Notifications';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/SocioNode_logo.png';
const mockListLang = ['EN', 'CN'];

const Navbar = ({ title, isMobileView, openSidebar, setOpenSidebar }) => {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState('EN');
  const [haveNotification, setHaveNotification] = useState(true);
  const { pathname } = useLocation();

  const navbarItems = [
    { title: 'Post a Situation', path: '/post/create-a-post' },
    { title: 'Pick a Situation', path: '/post/pick-a-post' },
    { title: 'Situation Room', path: '/post/situation-room' },
  ];

  const notificationContents = [
    'Karen Hope moved task “User Research“ from On Progress to Done',
    `Samantha William add new 4 attached files on task “Photo’s Assets“`,
    `Tony Soap invite you in task “Wireframing“ and “Hi-fidelity“`,
    `Samantha William created new Task`,
    `Samantha William created new Task`,
    `Samantha William created new Task`,
    `Samantha William created new Task`,
    `Samantha William created new Task`,
  ];

  const renderListLang = () => {
    return mockListLang.map((lang, index) => (
      <li key={index}>
        <span className="dropdown-item" onClick={() => setCurrentLang(lang)}>
          {lang}
        </span>
      </li>
    ));
  };

  const renderNotifications = () => {
    return <Notifications notifications={notificationContents} />;
  };

  const matchPath = (path) => path === pathname;

  const renderTextData = () => {
    if (isMobileView) {
      return (
        <div className="dropdown me-2">
          <span
            id="collapsedItemDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className="text-white me-2 fs-1"
            type="button"
          >
            <i className="bi bi-justify"></i>
          </span>
          <ul
            className="dropdown-menu collapsed-items"
            aria-labelledby="collapsedItemDropdown"
          >
            {navbarItems.map((item, index) => (
              <Link
                className={`item-wrapper ${
                  matchPath(item.path) ? ' d-flex active' : ' d-flex'
                }`}
                key={index}
                to={item.path}
              >
                <img
                  src={require(`../../assets/images/Navbar/responsive/${
                    index + 1
                  }.png`)}
                  alt="nav-icon"
                  className="me-2"
                  width="16px"
                  height="16px"
                />
                <span>{item.title}</span>
              </Link>
            ))}
          </ul>
        </div>
      );
    } else {
      return renderCollapseItems();
    }
  };

  const renderCollapseItems = () => {
    return navbarItems.map((item, index) => (
      <Link
        className={`item-wrapper text-white me-4${
          matchPath(item.path) ? ' active' : ''
        }`}
        key={index}
        to={item.path}
      >
        <img
          src={require(`../../assets/images/Navbar/${index + 1}.png`)}
          alt="nav-icon"
          className="me-2"
          width="16px"
          height="16px"
        />
        <span className="text-white">{item.title}</span>
      </Link>
    ));
  };

  return (
    <nav className="navbar background-primary">
      <div className="navbar-container container-fluid">
        {!openSidebar && (
          <div className="logo-wrapper background-primary d-flex">
            <span
              onClick={() => setOpenSidebar(!openSidebar)}
              className="text-white me-2 fs-1"
            >
              <i className="bi bi-justify"></i>
            </span>
            <Link to="/">
              <img src={logo} alt="logo" width="200px" />
            </Link>
          </div>
        )}
        {isMobileView && openSidebar && (
          <span
            className="closeSidebarButton me-2"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            Close Sidebar Menu
          </span>
        )}
        <h1 className="navbar-brand text-white" href="#">
          {title}
        </h1>
        <div className="menu d-flex align-items-center">
          <div className="collapsed-item d-flex">{renderTextData()}</div>
          <div className="item-wrapper text-white me-4">
            <div className="dropdown">
              <i
                className="bi bi-bell position-relative"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {haveNotification && (
                  <span className="red-dot position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                )}
              </i>
              <ul
                className="dropdown-menu notification"
                aria-labelledby="dropdownMenuButton2"
              >
                {renderNotifications()}
              </ul>
            </div>
          </div>
          <div className="item-wrapper text-white me-4">
            <img
              src={avatar}
              className="rounded-circle avatar"
              alt="Avatar"
              onClick={() => navigate('profile')}
            />
          </div>
          <div className="dropdown">
            <span
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="text-white me-1"
            >
              {currentLang}
              <i className="bi bi-caret-down-fill"></i>
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {renderListLang()}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
