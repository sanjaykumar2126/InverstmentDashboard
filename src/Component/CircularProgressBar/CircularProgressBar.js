import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './../../App.css'
import './Circularstyle.css'
export default function Circularprogressbar(props) {
  const percentage = props.percentage;
  return (
    <div style={{width:"15%"}}>
      <CircularProgressbar
   value={percentage}
   text={`${percentage}%`}
   styles={buildStyles({
     rotation: 0.25,
       strokeLinecap: 'butt',
     textSize: '16px',
     pathTransitionDuration: 0.5,
     pathColor: props.color,
     textColor: '#f88',
     trailColor: '#d6d6d6',
     backgroundColor: props.color,
   })}
 />
    </div>
  )
}
