import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DownArrowIcon,
  HomeIcon,
  ListPadIcon,
  CubeIcon,
  SoundIcon,
  TruckIcon,
  BarIcon,
  CashIcon,
  CursorIcon,
  DiscountIcon,
  PeopleIcon,
  ColorPaletIcon,
  ThunderIcon,
  WalletIcon,
} from "../../../Assets/Icons/Icons";
import "./NavBar.scss";
const navData = [
  { id: 1, title: "Home", Icon: HomeIcon, link: "/", active: true },
  { id: 2, title: "Orders", Icon: ListPadIcon, link: "/orders", active: false },
  {
    id: 3,
    title: "Products",
    Icon: CubeIcon,
    link: "/products",
    active: false,
  },
  {
    id: 4,
    title: "Delivery",
    Icon: TruckIcon,
    link: "/delivery",
    active: false,
  },
  {
    id: 5,
    title: "Marketing",
    Icon: SoundIcon,
    link: "/marketing",
    active: false,
  },
  {
    id: 6,
    title: "Analytics",
    Icon: BarIcon,
    link: "/analytics",
    active: false,
  },
  {
    id: 7,
    title: "Payments",
    Icon: CashIcon,
    link: "/payments",
    active: false,
  },
  { id: 8, title: "Tools", Icon: CursorIcon, link: "/tools", active: false },
  {
    id: 9,
    title: "Discount",
    Icon: DiscountIcon,
    link: "/discount",
    active: false,
  },
  {
    id: 10,
    title: "Audience",
    Icon: PeopleIcon,
    link: "/audience",
    active: false,
  },
  {
    id: 11,
    title: "Appearance",
    Icon: ColorPaletIcon,
    link: "/appearance",
    active: false,
  },
  {
    id: 12,
    title: "Plugins",
    Icon: ThunderIcon,
    link: "/plugins",
    active: false,
  },
];

function NavBar() {
  const [navBarData, setNavBarData] = useState(navData);
  const location = useLocation();
  const handleActive = (clickedIndex) => {
    const updatedNavBarData = navBarData.map((item) => {
      return { ...item, active: item.id === clickedIndex };
    });

    setNavBarData(updatedNavBarData);
  };
  useEffect(() => {
    const currentPath = location.pathname;
    const updatedNavBarData = navBarData.map((item) => ({
      ...item,
      active: item.link === currentPath,
    }));
    setNavBarData(updatedNavBarData);
  }, [location.pathname, navBarData]);
  return (
    <div className='nav_bar_container'>
      <div className='top_section'>
        <div className='profile_section'>
          <img
            alt='profile'
            src='https://a.storyblok.com/f/191576/1200x800/d0f2558acb/profile_picture_maker_after_.webp'
          />
          <div className='user_name'>
            <h2>Onkar</h2>
            <a href='#'>visit store</a>
          </div>
          <div className='arrow'>{DownArrowIcon}</div>
        </div>
        <div className='nav_bars'>
          {navBarData.map((data, index) => {
            return (
              <Link
                onClick={() => handleActive(data.id)}
                key={index}
                className={`nav_link ${data.active ? "active_nav" : ""}`}
                to={data.link}
              >
                {data.Icon}
                {data.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='bottom_section'>
        <div className='icon_div'>{WalletIcon}</div>
        <div className='credits_container'>
          <span>Available Credits</span>
          <h3>223.10</h3>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
