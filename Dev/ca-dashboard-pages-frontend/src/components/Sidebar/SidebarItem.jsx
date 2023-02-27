import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

export default function SidebarItem({
  item,
  isChild = false,
  setNavbarTitle,
  icon,
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const sideBarItemsClassName = isChild
    ? 'sidebar-item plain add-padding'
    : 'sidebar-item plain title';

  useEffect(() => {
    const { title, path } = item;
    if (matchPath(path)) setNavbarTitle(title);

    comparePathAndOpenSideMenuItem();
  }, [pathname]);

  useEffect(() => {}, []);

  const comparePathAndOpenSideMenuItem = () => {
    if (!item.childrens) return;

    const { mainPath } = item;
    if (pathname.includes(mainPath)) setOpen(true);
  };

  const getSubMenuClass = (path) => {
    return matchPath(path) ? 'active' : undefined;
  };

  const matchPath = (path) => {
    return path === pathname;
  };

  const handleMenuClick = () => {
    if (item && item.title === 'Log Out') {
      console.log("Clear Local Storage");
    }
    setOpen(!open);
  }

  const renderChildSubMenu = (item) => (
    <Link to={item.path} className={sideBarItemsClassName}>
      <span className={getSubMenuClass(item.path)}>{item.title}</span>
    </Link>
  );

  const renderChildlessSubMenu = (item) => (
    <Link
      to={item.path}
      className={
        matchPath(item.path)
          ? `${sideBarItemsClassName} open`
          : sideBarItemsClassName
      }
      onClick={handleMenuClick}
    >
      <div className="sidebar-title">
        <div>
          {icon && <img src={icon} alt={`icon`} className="me-2" />}

          <span className={getSubMenuClass(item.path)}>{item.title}</span>
        </div>
      </div>
    </Link>
  );

  if (item.childrens) {
    return (
      <div
        className={open ? 'sidebar-item open' : 'sidebar-item'}
        onClick={() => setOpen(!open)}
      >
        <div className="sidebar-title">
          <div>
            {icon && <img src={icon} alt={`icon`} className="me-2" />}
            <span>{item.title}</span>
          </div>
          <i
            className="bi bi-chevron-down toggle-btn"
            style={{ fontSize: '0.8rem' }}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              isChild={true}
              setNavbarTitle={setNavbarTitle}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return isChild ? renderChildSubMenu(item) : renderChildlessSubMenu(item);
  }
}
