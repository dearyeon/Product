import React, { Component } from 'react';
import ProductDetail from "./components/ProductDetail"
import SiteProductList from "./components/SiteProductList"
import SearchBar from "./components/SearchBar"
import ProductsContainer from "./components/ProductsContainer"

import Header from "./components/Header"
import WordCloud from "./static/wordcloud.png"
import SiteTitle from "./components/utils/SiteTitle"

import { SectionsContainer, Section } from "react-fullpage"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const site_code = "000";

function Home() {
    const options = {
        sectionClassName: 'section',
        anchors: ['', ''],
        scrollBar: false,
        navigation: false,
    };
    return (
        <SectionsContainer {...options}>
            <div className="App">
                <Section>
                    <Header container="main-search-bar-container" className="section">
                        <SearchBar />
                        <img src={WordCloud} alt="" style={{ marginTop: "160px", marginBottom: "60px" }} />
                    </Header>
                </Section>
                <Section>
                    <ProductsContainer id="recentProducts" className="section">
                        <h1>최근에 등록한 매물</h1>
                        <SiteProductList site_code={site_code} main_flag={true}></SiteProductList>
                    </ProductsContainer>
                </Section>
            </div>
        </SectionsContainer>
    );
}

function Products() {
    return (
        <div className="App" >
            <Header container="search-bar-container">
                <SearchBar />
            </Header>

            {/* <ProductDetail></ProductDetail> */}
            <ProductsContainer>
                <SiteTitle site_code={site_code}></SiteTitle>
                <SiteProductList site_code={site_code} main_flag={false}></SiteProductList>
            </ProductsContainer >
        </div >
    )
}

class TmpApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Products">
                        <Products />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }

}

export default TmpApp;
