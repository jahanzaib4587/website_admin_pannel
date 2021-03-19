import React from "react";
import { Table } from "react-bootstrap";
import "./table.css";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function Tabledetail(props) {
  return (
    <div>
      <Table className="">
        <thead className="">
          <tr className="m-1 border-0">
            <th className="table_heading ">Vehicle Name</th>
            <th className="table_heading ">Category</th>
            <th className="table_heading ">Registration No.</th>
          </tr>
        </thead>
        <tbody className="table_body">
          <tr className="table_row ">
            <td className="table_Name p-2 font-weight-bold text-danger">
              {props.Vehicle_Name}
            </td>
            <td className="table_category ">{props.Category}</td>
            <td className="table_regNo p-2">
              <div className="d-flex justify-content-between">
                <p>{props.RegNo}</p>
                <div>
                  <ClearIcon className="clearbtn rounded-circle p-1 ml-1" />
                  <ArrowUpwardIcon className="arrowUpbtn rounded-circle m-1" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="table_row ">
            <td className="table_Name p-2 font-weight-bold text-danger">
              <p className="table_name1 ">{props.Vehicle_Name}</p>
            </td>
            <td className="table_category ">{props.Category}</td>
            <td className="table_regNo p-2">
              <div className="d-flex justify-content-between">
                <p>{props.RegNo}</p>
                <div>
                  <ClearIcon className="clearbtn rounded-circle p-1 ml-1" />
                  <ArrowUpwardIcon className="arrowUpbtn rounded-circle m-1" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tabledetail;
