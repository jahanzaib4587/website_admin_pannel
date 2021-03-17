import React from "react";
import { Button } from "react-bootstrap";
import "./bodyCapsules.css";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
function BodyCapsules(props) {
  return (
    <div>
      <div className="mb-2 md={4} main">
        <Button className="button1" style={{ backgroundColor: props.bgcolor }}>
          <div className="d-flex align-items-center">
            <FormatAlignLeftIcon
              className="mr-auto icon"
              style={{ fontSize: "40px" }}
            />
            <div className="d-flex flex-column">
              <p>{props.title}</p>
              <h4 className="number">{props.count}</h4>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default BodyCapsules;
