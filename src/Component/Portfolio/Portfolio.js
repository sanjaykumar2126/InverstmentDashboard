import React from "react";
import Linechart from "./../LineChart/LineChart";
import Circularprogressbar from "./../CircularProgressBar/CircularProgressBar";
import { DIV,P,Value,A} from "./Portstyle";
export default function Portfolio(props) {
  return (
    <div style={{ margin: "30px 0px", borderBottom: "2px solid #eeeeee" }}>
      <div style={{ display: "flex" }}>
        <Circularprogressbar
          percentage={props.value.percentage}
          color={props.value.color}
        />
        <div style={{ width: "100%" }}>
          <div style={{ margin: "10px 30px",color:"navy"}}>{props.value.heading}</div>
          <DIV>
            <div>
              <P>NAV</P>
              <Value>{props.value.nav}</Value>
            </div>
            <div>
              <P>Units</P>
              <Value>{props.value.units}</Value>
            </div>
            <div>
              <P>Market value</P>
              <Value>{props.value.market}</Value>
            </div>
            <div style={{ marginTop: "-18px" }}>
              <Linechart
                points={props.value.points}
                color={props.value.color}
              />
            </div>
            <div style={{marginTop:"35px"}}>
            <A href="#">LEARN MORE </A>
            <span style={{fontSize:"19px",color:"navy",paddingLeft:"7px"}}>&#8594;</span>
            </div>
          </DIV>
        </div>
      </div>
    </div>
  );
}
