import React from "react";
import { Table, TableProps } from "react-bootstrap";
import TableRowData from "./tableRow";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed Cases</th>
            <th>Cured</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <TableRowData />
        </tbody>
      </Table>
    );
  }
}
