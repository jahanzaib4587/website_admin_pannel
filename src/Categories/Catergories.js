import React from "react";
import { Table } from "react-bootstrap";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import "./categories.css";
import Button from "react-bootstrap/Button";

function Categories(props) {
  return (
    <div>
      <div className="d-flex justify-content-end mr-3">
        <Button className="btn button_accept m-1 btn-sm ">
          Add New Category
        </Button>
      </div>

      <Table className="table">
        <thead>
          <tr className="m-1">
            <th className="table_heading ">Name</th>
            <th className="table_heading ">Description</th>
          </tr>
        </thead>
        <tbody className="table_body ">
          <tr className="table_row ">
            <td className="text-danger font-weight-bold ">Oranges</td>
            <td className="table_phone p-2">Fruit</td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">Lady Finger</td>
            <td className="table_phone p-2">Vegetable</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Categories;
