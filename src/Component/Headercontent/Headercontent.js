import React from 'react'
import {I,P,Div,Division,Divisionlink} from './Style';
// import { Division } from './../../../../todo/src/Pages/Alltodos/Style';
export default function Headercontent() {
    return (
        <div>
            <Divisionlink>
                <span>Home</span>
                <I><i className="fa fa-angle-right" aria-hidden="true"></i></I>
                <span>Invesment Overview</span>
            </Divisionlink>
            <Division>
                <P>Invesment Overview</P>
                <Div>The Church Fund - A1050919</Div>
            </Division>
        </div>
    )
}
