import React, { Component } from 'react';
import ProductDetail from "./components/ProductDetail"
import SiteProductList from "./components/SiteProductList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductDetail></ProductDetail>
        {/* <SiteProductList></SiteProductList> */}
      </div>
    )
  }
}

export default App;
