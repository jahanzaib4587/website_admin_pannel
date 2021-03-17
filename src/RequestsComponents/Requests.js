import React from "react";
import { Table } from "react-bootstrap";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import "./requests.css";
import Button from "react-bootstrap/Button";

function Requests(props) {
  return (
    <div>
      <Table className="table">
        <thead>
          <tr className="m-1">
            <th className="table_heading">{props.title}</th>
            <th className="table_heading">Ph#</th>
            <th className="table_heading">Email</th>
            <th className="table_heading">Status</th>
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
              <Button className="btn button_accept m-1">Accept</Button>
              <Button className="btn button_reject m-1">Reject</Button>
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">
              Muhammad Shahzaib
            </td>
            <td className="table_phone p-2">+923462567607</td>
            <td className="table_email p-2">Shahzaib4587289@gmail.com</td>
            <td className="d-flex justify-content-end p-2">
              <div>
                <Button className="btn button_accept m-1">Accept</Button>
                <Button className="btn button_reject m-1">Reject</Button>
              </div>
            </td>
          </tr>
          <tr className="table_row">
            <td className="text-danger font-weight-bold p-2">Fatima Rukhsar</td>
            <td className="table_phone p-2">+923447714755</td>
            <td className="table_email p-2">fatima289@gmail.com</td>
            <td className="d-flex justify-content-end p-2">
              <Button className="btn button_accept m-1">Accept</Button>
              <Button className="btn button_reject  m-1">Reject</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Requests;
