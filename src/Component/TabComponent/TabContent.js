// import { TabPanel } from "react-tabs";
import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import { H5, Divi } from "./style";

// import React from "react";

export default function TabContent(props) {
  return props.transactionData.map(listData => (
    <Divi>
      <H5>Transaction ID : {listData.id}</H5>
      <Table className="Table">
        <tr>
          <th className="th">Entered Date</th>
          <th className="th">Exchange Type</th>
          <th className="th">Allocation Type</th>
          <th className="th">Amount</th>
          <th className="th">Status</th>
        </tr>
        <tr>
          <td className="tr">{listData.enterdate}</td>
          <td className="tr">{listData.exchangetype}</td>
          <td className="tr">{listData.Allocationtype}</td>
          <td className="tr">
            <i class="fa fa-usd" aria-hidden="true"></i>
            {listData.amount}
          </td>
          <td className="tr">{listData.status}</td>
        </tr>
      </Table>
    </Divi>
  ));
}
