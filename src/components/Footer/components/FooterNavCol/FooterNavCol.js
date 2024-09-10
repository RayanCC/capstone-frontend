import React from "react";
import FooterNavItem from "../FooterNavItem/FooterNavItem";

const FooterNavCol = ({ title, items }) => (
  <div className="footernavcol-link">
    <h3 className="footernavcol-head">{title}</h3>
    <ul className="footernavcol-list">
      {items.map((item, index) => (
        <FooterNavItem key={index} text={item.text} href={item.href} />
      ))}
    </ul>
  </div>
);

export default FooterNavCol;
