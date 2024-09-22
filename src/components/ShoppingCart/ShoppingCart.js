import React from 'react'
import { PiShoppingCart } from "react-icons/pi";
import "../ShoppingCart/ShoppingCart.scss"

const ShoppingCart = () => {
  return (
    <div className="shoppingCart-wrapper">
        <PiShoppingCart id="shoppingCart-icon"/>
        <p>0</p>
    </div>
  )
}

export default ShoppingCart