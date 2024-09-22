import React from "react";

const FooterNavItem = ({ text, href }) => {
  return (
    <li className="footernavcol-item">
      <a href={href} className="footernavcol-link-item">
        {text}
      </a>
    </li>
  );
};

export default FooterNavItem;
