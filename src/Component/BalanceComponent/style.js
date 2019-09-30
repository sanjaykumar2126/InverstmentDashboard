import Styled from "styled-components";
// import { Tooltip } from 'reactstrap';

export const Balancediv = Styled.div`
   display: inline-block;
   /* border: 1px solid black; */
   padding : 10px;
   font-family: HelveticaNeue;
   font-size: 42px;
   font-weight: 300;
   color:#022737;
`;

export const Balancelink = Styled.div`
   display: inline-block;
   /* justify-content: space-between; */
   /* border: 1px solid black; */
   color: #006778;
   padding: 10px 0px;
`;

export const BalanceCard = Styled.div`
   display : flex;
   flex-direction: column;
   /* justify-content:space-between; */
   /* border: 1px solid black; */
   /* width: 100%; */
   margin: 10px 0px;
   background-color: white;
`;

export const Para = Styled.a`
  display : inline-block;
  text-decoration:none;
  margin: ${props => props.display ? "0" : "auto"} ;
  margin-left: ${props => props.display ? "0" : "10px"};
  /* margin: 0 auto; */
  color:${props => props.color ? "#69923a" : "#006778" };
  font-weight:${props => props.color ? "normal" : props.display ? "normal" : "bold" };
  font-family: "HelveticaNeue";
  font-size: ${props => props.size};
`;

export const Right = Styled.i`
  /* float: right; */
  padding-left : 15px;
  font-size:16px;
  font-style : italic;
  cursor: pointer;
  color: #006778;

`;
export const Tooltiptext=Styled.div`
visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 110%;
  ::after {
   content: "";
   position: absolute;
   top: 50%;
   right: 100%;
   margin-top: -5px;
   border-width: 5px;
   border-style: solid;
   border-color: transparent black transparent transparent;
 }
`;
export const Tooltip=Styled.i`
position: relative;
   /* display: inline-block; */
   /* border-bottom: 1px dotted black; */
   &:hover ${Tooltiptext} {
      /* background:red; */
   visibility: visible;
 }
`;



 
 
 