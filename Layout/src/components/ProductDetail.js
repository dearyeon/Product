import React, { Component } from "react"
import ProductContents from "./ProductContents"

const productDetailJson = {
    "site_code": "000",
    "image": "img",
    "title": "아이폰 팝니다 @@@",
    "price": "900000",
    "origin_url": "https://naver.com",
    "detail": "아이폰 뭐시기뭐시기 중고 S급 팝니다<br>직거래<br>광진구 가능\n",
    "date": "2020-01-01",
    "location": "경상북도 구미시 원평2동",
    "shipPrice": "무료배송",
}
class ProductDetail extends Component {
    render() {
        return (
            <>
                <ProductContents data={productDetailJson} />
            </>
        )
    }
}

export default ProductDetail;