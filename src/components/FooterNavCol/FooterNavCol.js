import React from "react";

const FooterNavCol = () => {
  const navhead = [
    { id: 1, 
      title: "Get To Know Us",
      items: [
        {text:"About Us", href:"https://www.google.ca/"},
        {text:"Careers", href:"https://www.google.ca/"},
        {text:"Contact", href:"https://www.google.ca/"},
      ]
    },
    { id: 2, 
      title: "Make Money with Us",
      items: [
        {text:"Sell on BlueFamily", href:"https://www.google.ca/"},
        {text:"Become Our Partner", href:"https://www.google.ca/"},
        {text:"Creat Your Plush", href:"https://www.google.ca/"},
      ]
    },
    { id: 3, 
      title: "BlueFamily Payment Products" ,
      items: [
        {text:"Shop with Points", href:"https://www.google.ca/"},
        {text:"Blue Family Cash", href:"https://www.google.ca/"},
        {text:"Gift Cards", href:"https://www.google.ca/"},
      ]
    },
    { id: 4, 
      title: "Let Us Help You",
      items: [
        {text:"Customer Service", href:"https://www.google.ca/"},
        {text:"Returns", href:"https://www.google.ca/"},
        {text:"Track Your Order", href:"https://www.google.ca/"},
      ]
    },
  ];

  return (
    <div className="footernavcol-contents">
      {navhead.map((header) => (
          <div className="footernavcol-link" key={header.id}>
            <h3 className="footernavcol-head">{header.title}</h3>
            <ul className="footernavcol-list">
              {header.items.map((item,index) => (
                <li key={index} className="footernavcol-item">
                     <a href={item.href} className="footernavcol-link-item">
                      {item.text}
                     </a>
                </li>
              ))}
            </ul>
          </div>
      ))}
    </div>
  );
};

export default FooterNavCol;
