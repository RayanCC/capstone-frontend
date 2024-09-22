import React from "react";
import FooterNavCol from "../FooterNavCol/FooterNavCol";
import navData from "../FooterNavData/FooterNavData";

const FooterNav = () => {
  return (
    <div className="footernavcol-container">
      {navData.map((col) => (
        <FooterNavCol key={col.id} title={col.title} items={col.items} />
      ))}
    </div>
  );
};

export default FooterNav;
