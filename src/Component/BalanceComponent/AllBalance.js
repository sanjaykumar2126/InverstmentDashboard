import React from "react";
import Balance from "./balance";

export default function AllBalance(props) {
  return (
      props.balAmount.map(listbalance => (
    <Balance
      title={listbalance.text}
      amount={listbalance.balance}
      tabname={listbalance.linkname}
    />
  ))
  );
}
