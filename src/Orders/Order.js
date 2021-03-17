import React from "react";
import { Table } from "react-bootstrap";

import "./order.css";
import DoneAllTwoToneIcon from "@material-ui/icons/DoneAllTwoTone";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccessAlarmTwoToneIcon from "@material-ui/icons/AccessAlarmTwoTone";
import AutorenewTwoToneIcon from "@material-ui/icons/AutorenewTwoTone";
function Orders(props) {
  return (
    <div>
      <div className="d-flex  flex-row-reverse ">
        <div className="d-flex p-1 ml-1">
          <AccessAlarmTwoToneIcon className="text-warning mr-2" />
          <p>Pending</p>
        </div>
        <div className="d-flex p-1 ml-1">
          <AutorenewTwoToneIcon className="text-info mr-2" />
          <p>In-Progress</p>
        </div>
        <div className="d-flex p-1 ml-1">
          <ShoppingBasketIcon className="text-success mr-2" />
          <p>Purchased</p>
        </div>
        <div className="d-flex p-1 ml-1">
          <DoneAllTwoToneIcon className="text-danger mr-2" />
          <p>Delivery</p>
        </div>
      </div>
      <Table className="table">
        <thead>
          <tr className="m-1">
            <th className="table_heading">Client</th>
            <th className="table_heading">No.of Products</th>
            <th className="table_heading">Delivery Person</th>
            <th className="table_heading">Status</th>
          </tr>
        </thead>
        <tbody className="table_body ">
          <tr className="table_row ">
            <td className="text-danger font-weight-bold ">
              Muhammad Jahanzaib
            </td>
            <td className="table_products  p-2">4</td>
            <td className="table_deliveryperson p-2">Umar Kharal</td>
            <td className="d-flex justify-content-end p-2">
              <ShoppingBasketIcon className="text-success" />
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">
              Muhammad Shahzaib
            </td>
            <td className="table_products  p-2">2</td>
            <td className="table_deliveryperson p-2">Shahzaib</td>
            <td className="d-flex justify-content-end p-2">
              <AccessAlarmTwoToneIcon className="text-warning " />
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">Fatima Rukhsar</td>
            <td className="table_products  p-2">4</td>
            <td className="table_deliveryperson p-2">Mohsin</td>
            <td className="d-flex justify-content-end p-2">
              <ShoppingBasketIcon className="text-success" />
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">Faraz</td>
            <td className="table_products  p-2">7</td>
            <td className="table_deliveryperson p-2">Ali</td>
            <td className="d-flex justify-content-end p-2">
              <AutorenewTwoToneIcon className="text-info" />
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">Hassan</td>
            <td className="table_products  p-2">8</td>
            <td className="table_deliveryperson p-2">Saboor</td>
            <td className="d-flex justify-content-end p-2">
              <DoneAllTwoToneIcon className="text-danger " />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Orders;
