import React, { Component } from 'react';
import * as d3 from 'd3';
import '../../styles/LineChart.css';

const width = 850;
const height = 500;
const margin = {top: 20, right: 5, bottom: 20, left: 35};
const blue = '#2980b9';

class LineChart extends Component {
  state = {
    cases: null, // svg path command for all cases
    // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line(),
  };

  xAxis = d3.axisBottom().scale(this.state.xScale)
    .tickFormat(d3.timeFormat('%b'));
  yAxis = d3.axisLeft().scale(this.state.yScale)
    .tickFormat(d => `${d}`);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const {data} = nextProps;
    const {xScale, yScale, lineGenerator} = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = [data[0].Date, data[364].Date];
    const tempMax = d3.max(data, d => d.Cases);
    xScale.domain(timeDomain);
    yScale.domain([0, tempMax + 100]);

    // calculate line for cases
    lineGenerator.x(d => xScale(d.Date));
    lineGenerator.y(d => yScale(d.Cases));
    const cases = lineGenerator(data);

    return {cases};
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {

    return (
    <div className="graph-container">
        <svg width={width} height={height}>
        <path d={this.state.cases} fill='none' stroke={blue} strokeWidth='2' />
        <g>
          <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
          <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    </div>
    );
  }
}

export default LineChart;
