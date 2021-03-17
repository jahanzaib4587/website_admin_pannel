import React from "react";
import BodyCapsules from "./BodyCapsules";
import "./dashboard.css";
function Dashboard() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <BodyCapsules title="Orders" count="20" bgcolor="#f5c228" />
        <BodyCapsules title="Invoices" count="20" bgcolor="#e90a0a" />
        <BodyCapsules title="Clients" count="20" bgcolor="#e90a0a" />
        <BodyCapsules title="Delivery" count="20" bgcolor="#e90a0a" />
      </div>
      <div className="d-flex main">
        <img
          className="image"
          src="https://sites.google.com/site/piggraphy/_/rsrc/1472852355946/home/graphical-skills/lines-graphs/2cf9233527c9e34347b7eec449170c77938db2d6.gif"
        ></img>
      </div>
    </div>
  );
}

export default Dashboard;
