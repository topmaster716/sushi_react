import React, { Component } from "react";
import DASH_ICON from "./assests/images/dash_icon.png";
import ORDERS_ICON from "./assests/images/order.png";
import CUSTOMERS_ICON from "./assests/images/manager.png";
import RESERVE_ICON from "./assests/images/dispatch.png";
import PAYMENTS_ICON from "./assests/images/payment.png";
import SETTINGS_ICON from "./assests/images/levels.png";
import LOGOUT_ICON from "./assests/images/logout.png";
import ACTIVE_ORDERS from "./assests/images/online-order.png";
import RESERVATIONS from "./assests/images/reservation.png";
import PAYMENTS from "./assests/images/bill.png";
import TOTAL_CUSTOMERS from "./assests/images/man.png";
import SideItem from "./SideItem";
import DashItem from "./DashItem";
import "./Admin.css";

class Admin extends Component {
  state = {
    sideitems: [
      { id: 0, img: ORDERS_ICON, comment: "ORDERS" },
      { id: 1, img: CUSTOMERS_ICON, comment: "CUSTOMERS" },
      { id: 2, img: RESERVE_ICON, comment: "TABLE RESERVE" },
      { id: 3, img: PAYMENTS_ICON, comment: "PAYMENTS" },
      { id: 4, img: SETTINGS_ICON, comment: "SETTINGS" }
    ],
    dashitems: [
      { id: 0, img: ACTIVE_ORDERS, comment: "ACTIVE ORDERS", count: 12 },
      { id: 1, img: RESERVATIONS, comment: "RESERVATIONS", count: 4 },
      { id: 2, img: PAYMENTS, comment: "PAYMENTS", count: 99 },
      { id: 3, img: TOTAL_CUSTOMERS, comment: "TOTAL_CUSTOMS", count: 55 }
    ]
  };
  render() {
    return (
      <div className="Admin-container">
        <div className="Admin-box">
          <div className="Admin-sidebar">
            <div className="Admin-icon">
              <img
                src={DASH_ICON}
                alt="Dash Icon"
                style={{ margin: "auto", width: "70%" }}
              ></img>
            </div>
            {this.state.sideitems.map(sideitem => (
              <SideItem
                key={sideitem.id}
                img_src={sideitem.img}
                comment={sideitem.comment}
              />
            ))}
            <div
              style={{ cursor: "pointer" }}
              onClick={event => (window.location.href = "/")}
              className="Admin-logout"
            >
              <div style={{ marginLeft: "auto", marginRight: "10px" }}>
                Log Out
              </div>
              <div style={{ marginRight: "auto", marginLeft: "10px" }}>
                <img src={LOGOUT_ICON} alt="Logout Icon"></img>
              </div>
            </div>
          </div>
          <div className="Admin-Dashboard">
            <div className="Dashboard-title">ADMIN DASHBOARD</div>
            <div className="Dashboard-items">
              {this.state.dashitems.map(dashitem => (
                <DashItem
                  key={dashitem.id}
                  img_src={dashitem.img}
                  comment={dashitem.comment}
                  count={dashitem.count}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
