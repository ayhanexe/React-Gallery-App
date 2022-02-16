import React, { Component } from 'react'
import Button from "./button.style";
import GalleryImage from "../galleryImage/galleryImage";

export default class GalleryButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        })
        console.log(this.state);
    }

    render() {
        const { show } = this.state;

        return (
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <Button onClick={this.handleClick.bind(this)}>{show ? "Hide Image" : "Show Image"}</Button>
                {show ? <GalleryImage src={this.props.imageUrl} /> : null}
            </div>
        )
    }
}
