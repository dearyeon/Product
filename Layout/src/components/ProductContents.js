import React, { Component } from "react"
import ProductImage from "./utils/ProductImage"
import SiteIcon from "./utils/SiteIcon"
import HashTag from "./HashTag"
import "../style/ProductContents.scss"
import "../style/ImageComponent.scss"

class SiteTileComponent extends Component {
    constructor(props) {
        super(props)
        const { site_code } = this.props.data
        this.state = {
            site_title: this.selectSiteIcon(site_code)
        }
    }
    selectSiteIcon = (site_code) => {
        switch (site_code) {
            case "000":
                return "11번가"
            case "001":
                return "번개장터"
            case "002":
                return "중고나라"
            case "003":
                return "당근마켓"
            case "004":
                return "셀잇"
            case "005":
                return "헬로마켓"
            default:
                return ""
        }
    }
    render() {
        const { site_code, title, price, origin_url, detail, location, shipPrice } = this.props.data
        const site_title = this.state.site_title
        return (
            <>
                <div className="productMain">
                    <ProductImage src="" className="productDetailImage" />
                    <div className="productMainDetail">
                        <div className="siteIconTitle">
                            <SiteIcon site_code={site_code} />
                            <div className="siteTitle">{site_title}</div>
                        </div>
                        <div className="title">{title}</div>
                        <div className="price">{price} 원</div>
                        <a href={origin_url} className="originUrl">바로가기</a>
                    </div>
                </div>
                <div className="etcDetail">
                    <HashTag data={location} />
                    <HashTag data={shipPrice} />
                </div>
                <div className="detail" id="detail" dangerouslySetInnerHTML={{ __html: detail }}></div>
            </>
        )
    }
}

export default SiteTileComponent;
