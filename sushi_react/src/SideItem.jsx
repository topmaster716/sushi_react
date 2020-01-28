import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./SideItem.css";

class SideItem extends Component {
  state = {
    imgsrc: this.props.img_src,
    comment: this.props.comment
  };
  render() {
    return (
      <div style={{ cursor: "pointer" }}>
        <img src={this.props.img_src} alt="sdfs" style={{ width: "18%" }}></img>

        <h4>{this.state.comment}</h4>
      </div>
    );
  }
}

export default SideItem;
