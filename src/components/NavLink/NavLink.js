import React from "react";
import { Link } from "react-router-dom";
import Home from "../../assets/img/home.jpg";
import Shop from "../../assets/img/shop.jpg";
import Gallery from "../../assets/img/gallery.jpg";
import AboutUs from "../../assets/img/about.jpg";
import Contact from "../../assets/img/contact.jpg";

const NavLink = () => {
  const navLinks = [
    { to: "/home", text: "Home", imgSrc: Home, alt: "Home" },
    { to: "/shop", text: "Shop", imgSrc: Shop, alt: "Shop" },
    { to: "/gallery", text: "Gallery", imgSrc: Gallery, alt: "Gallery" },
    { to: "/aboutus", text: "About Us", imgSrc: AboutUs, alt: "About Us" },
    { to: "/contact", text: "Contact", imgSrc: Contact, alt: "Contact" },
  ];

  return (
    <nav className="navBar">
      {navLinks.map((link, index) => (
        <Link key={index} to={link.to} className="navLink">
          <span className="navLinkText">{link.text}</span>
          <img src={link.imgSrc} alt={link.alt} className="navLinkImage" />
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;
