import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../util/Constant";
import "../ItemDetail/itemdetail.scss";

const ItemDetail = () => {
  const { id } = useParams();
  const item = products.find((product) => product.id === id);

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="item-detail">
      <div className="item-image">
        <img src={item.src} alt={item.text}></img>
      </div>
      <div className="item-info">
        <h1>{item.text}</h1>
        <div className="divider"></div>
        <p className="item-price">Price: ${item.price}</p>
        <div className="item-description">
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="description-title">Description</span>
                </td>
                <td>
                  <span className="description-info">{item.description}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="description-title">Brand</span>
                </td>
                <td>
                  <span className="description-info">{item.Brand}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="description-title">Colour</span>
                </td>
                <td>
                  <span className="description-info">{item.Colour}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="description-title">Dimensions</span>
                </td>
                <td>
                  <span className="description-info">{item.Dimensions}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="description-title">FilledWith</span>
                </td>
                <td>
                  <span className="description-info">{item.Filledwith}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="add-to-cart-container">
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
