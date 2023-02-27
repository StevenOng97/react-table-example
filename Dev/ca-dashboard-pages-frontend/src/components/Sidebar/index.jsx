import React from 'react';
import SidebarItem from './SidebarItem';
import items from './data.json';
import logo from '../../assets/images/SocioNode_logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar({ setNavbarTitle }) {
  return (
    <div className="sidebar full-height">
      <div className="logo-wrapper background-primary">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid w-100" />
        </Link>
      </div>
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          setNavbarTitle={setNavbarTitle}
          icon={require(`../../assets/images/Sidebar/${index + 1}.png`)}
        />
      ))}
    </div>
  );
}
