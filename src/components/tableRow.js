import React from "react";
import { Table, TableProps } from "react-bootstrap";

export default class TableRowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://sharadcodes.github.io/covid19-indian-stats/indian_states.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ response: data });
      })
      .catch(console.log);
  }

  render() {
    return this.state.response.map((data, index) => {
      return (
        <tr>
          <td>{data.state_ut}</td>
          <td>
            {parseInt(data.confirmed_indian) +
              parseInt(data.confirmed_foreign_nationals)}
          </td>
          <td>{data.cured}</td>
          <td>{data.deaths}</td>
        </tr>
      );
    });
  }
}
