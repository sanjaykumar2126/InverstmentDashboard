import React, { Component } from "react";
import Portfolio from "./../Portfolio/Portfolio";
import { Allocation,Perform_heading,Portfoli } from './Investmentstyle';
export default class Investmentstyle extends Component {
  state = {
    data: [
      {
        percentage:30,
        color:"green",
        heading: "Money Market",
        nav: "$10.02",
        units: "9,530,495.01",
        market: "$95,495.01",
        points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3},{x:8,y:3}] 
      },
      {
          percentage:26,
          color:"blue",
        heading: "Conservative grouth",
        nav: "$10.02",
        units: "9,530,495.01",
        market: "$95,495.01",
        points: [{x: 2, y: 3}, {x: 4, y: 5}, {x: -1, y: -3},{x:8,y:3}] 
      },
      {
          percentage:14,
          color:"brown",
        heading: "Income",
        nav: "$10.02",
        units: "9,530,495.01",
        market: "$95,495.01",
        points: [{x: -1, y: 2}, {x: 5, y: 5}, {x: 6, y: 7},{x:8,y:3}] 
      }
    ]
  };
  render() {
    return (
      <div>
        <div style={{ margin: "30px 0px" }}>
          <Allocation>Your Allocation</Allocation>
          <Perform_heading>Investment Performance</Perform_heading>
        </div>
        <Portfoli>Portfolio Builders</Portfoli>
        {this.state.data.map(value => (
          <Portfolio value={value} />
        ))}
      </div>
    );
  }
}
