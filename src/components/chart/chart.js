import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { ArgumentScale, ValueScale, Animation } from '@devexpress/dx-react-chart';
import { scaleLog, scaleTime } from 'd3-scale';

import { bitcoin as data } from './data-vizualization';

const modifyDomain = () => [100, 100000];

const superscript = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const formatPower = d => (`${d}`).split('').map(c => superscript[c]).join('');
const format = scale => scale.tickFormat(4, d => 10
  + formatPower(Math.round(Math.log(d) / Math.LN10)));

export default class ChartPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentScale factory={scaleTime} />
          <ValueScale factory={scaleLog} modifyDomain={modifyDomain} />
          <ArgumentAxis />
          <ValueAxis tickFormat={format} />

          <LineSeries
            valueField="price"
            argumentField="date"
          />
          <Title
            text="Average USD market price across major bitcoin exchanges"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
