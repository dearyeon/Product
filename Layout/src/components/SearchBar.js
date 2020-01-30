import React, { Component } from "react"
import SiteIcon from "./utils/SiteIcon"
import "../style/SearchBar.scss"
import Search from "../static/search.png"
import { Link } from "react-router-dom";

class SearchBar extends Component {
    state = {
        keyword: ""
    }

    inputKeyword = () => {
        const keyword = document.getElementById("keyword").value
        this.setState({
            keyword
        });
    }

    render() {
        return (
            <>
                <Link to={"/"}>
                    <SiteIcon site_code="" />
                </Link>
                <div className="search-bar">
                    <input type="text" id="keyword" className="search-bar-input" placeholder="원하시는 상품을 입력하세요." onChange={this.inputKeyword} />
                    <Link to={`/keyword=${this.state.keyword}`}>
                        <img src={Search} alt="" className="search-icon" />
                    </Link>
                </div>

            </>
        )
    }
}

export default SearchBar