import React from 'react'
import { PiShoppingCart } from "react-icons/pi";
import "../ShoppingCart/ShoppingCart.scss"

const ShoppingCart = () => {
  return (
    <div className="shoppingCart-Wrapper">
        <PiShoppingCart id="ShoppingCart-Icon"/>
        <p>0</p>
    </div>
  )
}

export default ShoppingCart