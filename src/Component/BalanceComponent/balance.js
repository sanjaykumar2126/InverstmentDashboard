import React from "react";
import { Balancediv, BalanceCard, Para, Right, Balancelink,Tooltip,Tooltiptext } from "./style";
// import {Tooltip} from 'reactstrap';

export default function balance(props) {
  return (
    <BalanceCard>
      <Balancediv>
          <div>
        <Para size="24px" display={true} color={false}>
          {props.title}
        </Para>
        <Para size="24px" display={true} color={false}>
          <Right>
            <Tooltip><i class="fa fa-info-circle" aria-hidden="true"><Tooltiptext> Balance in your donor-advised fund after the previous day’s trading cycle is completed
            </Tooltiptext></i></Tooltip>
          </Right>
        </Para>
        </div>
        <Para size="42px" color={true}>
          <i class="fa fa-usd" aria-hidden="true"></i>
        </Para>
        <Para size="42px" color={true}>
          {props.amount}
        </Para>
      </Balancediv>
      <Balancelink>
        <Para href="#" size="16px" color={false}>
          {props.tabname}
        </Para>
        <Right>
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </Right>
      </Balancelink>
    </BalanceCard>
  );
}
