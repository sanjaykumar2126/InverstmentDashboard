import React, { Component } from 'react';
import LineChart from 'react-linechart';
import './Linestyle.css';
// import React from 'react'

export default function Linechart(props) {
    const data = [
        {									
            color: props.color, 
            points: props.points
        }
    ];
    return (
        <div>
                <div className="App">
                    <LineChart 
                        width={200}
                        height={150}
                        data={data}
                    />
                </div>				
            </div>
    )
}

