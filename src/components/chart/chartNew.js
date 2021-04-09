import React from "react";
const d3 = require("d3");
const width = 650;
const height = 400;
const margin = {
  top: 20,
  right: 5,
  bottom: 50,
  left: 60
};
class ChartNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  xAxis = d3.axisBottom();
  yAxis = d3.axisLeft();
  static getDerivedStateFromProps(nextProps, prevState) {
   const { data } = nextProps;
   if (!data) return {};
  const xExtent = d3.extent(data, d => d.date);
  const yExtent = d3.extent(data, d => d.price);
  const xScale = d3
    .scaleTime()
    .domain(xExtent)
    .range([margin.left, width - margin.right]);
  const yScale = d3
    .scaleLinear()
    .domain(yExtent)
    .range([height - margin.bottom, margin.top]);
  const line = d3
    .line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.price));
  const minY = d3.min(data, d => d.price);
  const area = d3
    .area()
    .x(d => xScale(d.date))
    .y0(d => yScale(minY))
    .y1(d => yScale(d.price));
  return { xScale, yScale, data, line, area };
 }
  componentDidUpdate() {
    this.xAxis.scale(this.state.xScale);
    d3.select(this.refs.xAxis).call(this.xAxis);
    this.yAxis.scale(this.state.yScale);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }
  render() {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center"
    }
  };
  const { data, line, area } = this.state;
  return (
    <div style={styles.container}>
      <svg width={width} height={height}>
        <path
          id={"line"}
          d={line(data)}
          stroke="#6788ad"
          fill="transparent"
        />
        <path
          id={"area"}
          d={area(data)}
          fill="#6788ad"
          style={{ opacity: 0.2 }}
        />
        <text
          transform={`translate(${width / 2 - margin.left -margin.right}, ${height - 10})`}
        >
        30 days
        </text>
        <text
          transform={`translate(15, ${(height - margin.bottom) /1.5}) rotate(270)`}
        >
        USD Price
        </text>
        <g
          ref="xAxis"
          transform={`translate(0, ${height - margin.bottom})`}
        />
        <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
      </svg>
    </div>
   );
  }
}
export default ChartNew;