import React from "react";
import ChartNew from "./ChartNew";



class Chart extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    data: []
  };
}
componentDidMount() {
  fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(response => response.json())
    .then(data => {
      this.setState({
       data: Object.keys(data.bpi).map(date => {
       return {
          date: new Date(date),
          price: data.bpi[date]
         };
      })
    });
  })
   .catch(error => console.log(error));
}
  render() {
  const { data } = this.state;
return (
     <div>
       <h2 style={{ textAlign: "center" }}>
         30 day Bitcoin Price Chart
       </h2>
       <ChartNew data={data} />
     </div>
      );
   }
}
export default Chart;