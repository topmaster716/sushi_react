import React, { Component } from "react";
import "./DashItem.css";

class DashItem extends Component {
  state = {};
  render() {
    return (
      <div style={{ cursor: "pointer" }} className="DashItem-container">
        <div className="DashItem-Comment">
          <h2>{this.props.comment}</h2>
        </div>
        <div className="DashItem-Status">
          <div style={{ width: "70%", marginBottom: "15px" }}>
            <img
              src={this.props.img_src}
              alt="sdfs"
              style={{ width: "90px", height: "90px" }}
            ></img>
          </div>

          <div className="DashItem-count">{this.props.count}</div>
        </div>
      </div>
    );
  }
}

export default DashItem;
