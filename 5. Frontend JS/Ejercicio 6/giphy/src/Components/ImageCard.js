import React, { Component } from 'react'

export default class ImageCard extends Component {

    constructor(props)
    {
        super (props);
    }

    render() {
        return (
            <div className ="image-container">
                <img src={this.props.url} alt="" className="image-view" />
            </div>
        )
    }
}
