import React, { Component } from "react";
import productDefaultImage from "../static/product-default.png";

class ProductListItem extends Component {
  render() {
    const { productImage, productName, productPrice } = this.props;
    return (
      <div className="product-list-item">
        <div className="product-image">
          <img src={productImage || productDefaultImage} alt="product-image" />
        </div>
        <div className="product-name">{productName}</div>
        <div className="product-price">{productPrice}원</div>
      </div>
    );
  }
}

export default ProductListItem;
