import React from "react";
import { Table } from "react-bootstrap";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import "./client.css";
function Client(props) {
  return (
    <div>
      <Table className="table">
        <thead>
          <tr className="m-1">
            <th className="table_heading">{props.title}</th>
            <th className="table_heading">Ph#</th>
            <th className="table_heading">Email</th>
            <th className="table_heading d-flex justify-content-end mr-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="table_body ">
          <tr className="table_row ">
            <td className="text-danger font-weight-bold ">
              Muhammad Jahanzaib
            </td>
            <td className="table_phone p-2">+923487414542</td>
            <td className="table_email p-2">jahanzaib4587@gmail.com</td>
            <td className="d-flex justify-content-end p-2">
              <DoneAllIcon className="table_icon mr-3" />
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">
              Muhammad Shahzaib
            </td>
            <td className="table_phone p-2">+923462567607</td>
            <td className="table_email p-2">Shahzaib4587289@gmail.com</td>
            <td className="d-flex justify-content-end p-2">
              <DoneAllIcon className="table_icon mr-3" />
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">Fatima Rukhsar</td>
            <td className="table_phone p-2">+923447714755</td>
            <td className="table_email p-2">fatima289@gmail.com</td>
            <td className="d-flex justify-content-end p-2">
              <DoneAllIcon className="table_icon mr-3" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Client;
