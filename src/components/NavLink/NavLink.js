import React from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/img/home.jpg";
import Shop from "../../assets/img/shop.jpg";
import Gallery from "../../assets/img/gallery.jpg";
import AboutUs from "../../assets/img/about.jpg";
import Contact from "../../assets/img/contact.jpg";

const NavLink = () => {
  const navLinks = [
    { to: "/home", text: "Home", imgSrc: Home},
    { to: "/shop", text: "Shop", imgSrc: Shop},
    { to: "/gallery", text: "Gallery", imgSrc: Gallery},
    { to: "/aboutus", text: "About Us", imgSrc: AboutUs},
    { to: "/contact", text: "Contact", imgSrc: Contact},
  ];

  return (
    <nav className="navBar">
      {navLinks.map((link, index) => (
        <Link key={index} to={link.to} className="navLink">
          <span className="navLinkTitle">{link.text}</span>
          <img src={link.imgSrc} alt={link.text} className="navLinkImage" />
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;
