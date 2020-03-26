import React from "react";
import ReactApexChart from "react-apexcharts";

export default class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        chart: {
          type: "donut",
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  componentDidMount() {
    var index,
      state = [],
      cured = [];
    fetch(
      "https://sharadcodes.github.io/covid19-indian-stats/indian_states.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (index = 0; index < data.length; index++) {
          if (parseInt(data[index].cured) !== 0) {
            cured.push(parseInt(data[index].cured));
            state.push(data[index].state_ut);
          }
        }
        this.setState({
          series: cured,
          options: {
            chart: {
              type: "donut",
            },
            labels: state,
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          },
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}
