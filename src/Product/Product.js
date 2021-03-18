import React from "react";
import { Table } from "react-bootstrap";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import "./product.css";
import Button from "react-bootstrap/Button";

function Product(props) {
  return (
    <div>
      <div className="d-flex justify-content-end mr-3">
        <Button className="btn button_accept m-1 btn-sm ">
          Add New Product
        </Button>
      </div>

      <Table className="table">
        <thead>
          <tr className="m-1">
            <th className="table_heading ">SKU</th>
            <th className="table_heading ">Product Name</th>
            <th className="table_heading ">Short Description</th>
            <th className="table_heading d-flex justify-content-end">
              Average Price
            </th>
          </tr>
        </thead>
        <tbody className="table_body ">
          <tr className="table_row ">
            <td className="table_phone p-2">1234</td>
            <td className="text-danger font-weight-bold ">Coconut</td>
            <td className="table_phone p-2">Coconut should be fresh</td>
            <td className="table_price p-2 d-flex justify-content-end mr-3">
              $ 12
            </td>
          </tr>
          <tr className="table_row">
            <td className="table_phone p-2">2341</td>
            <td className="text-danger font-weight-bold p-2">Mangoes</td>
            <td className="table_phone p-2">Mangoes should be top quality</td>
            <td className="table_price p-2 d-flex justify-content-end mr-3">
              $ 34
            </td>
          </tr>
          <tr className="table_row">
            <td className="table_phone p-2">2341</td>
            <td className="text-danger font-weight-bold p-2">Mangoes</td>
            <td className="table_phone p-2">Mangoes should be top quality</td>
            <td className="table_price p-2 d-flex justify-content-end mr-3">
              $ 34
            </td>
          </tr>
          <tr className="table_row ">
            <td className="table_phone p-2">1234</td>
            <td className="text-danger font-weight-bold ">Coconut</td>
            <td className="table_phone p-2">Coconut should be fresh</td>
            <td className="table_price p-2 d-flex justify-content-end mr-3">
              $ 12
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Product;
