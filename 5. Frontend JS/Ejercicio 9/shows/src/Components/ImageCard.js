import React, { Component } from 'react'


export default class ImageCard extends Component {

  render() {
    return (
      <div className= "image-container">
        <img src={this.props.url} alt="" className="image-view" />
      </div>
    )
  }
}
