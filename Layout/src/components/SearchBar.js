import React, { Component } from "react"
import SiteIcon from "./utils/SiteIcon"
import "../style/SearchBar.scss"
import Search from "../static/search.png"
import { Link } from "react-router-dom";

class SearchBar extends Component {
    state = {
        keyword: ""
    }

    InputKeyword = () => {
        const keyword = document.getElementById("keyword").value
        this.setState({
            keyword
        });
    }

    render() {
        return (
            <>
                <SiteIcon site_code="" />
                <Link to={`/keyword=${this.state.keyword}`}>
                    <div className="search-bar">
                        <input type="text" id="keyword" className="search-bar-input" placeholder="원하시는 상품을 입력하세요." />
                        <img src={Search} alt="" className="search-icon" onClick={this.InputKeyword} />
                    </div>
                </Link>
            </>
        )
    }
}

export default SearchBar