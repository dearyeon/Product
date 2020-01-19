import React, { Component } from "react"
import defaultImage from "../../static/default_photo.jpg"

class ImageComponent extends Component {
    render() {
        let { src } = this.props
        const { className } = this.props
        src = src === "" ? defaultImage : src
        return (
            <img src={src} alt="nono" className={className} />
        )
    }
}

export default ImageComponent;