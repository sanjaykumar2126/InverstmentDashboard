import React, { Component } from "react";
import { Div,TabDi,ViewLink,TabDiv,BalanceDiv} from "./Style";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DemoCarousel from "./Component/Carousel/Carousel";
import Headercontent from "./Component/Headercontent/Headercontent";
import Investmentperformance from "./Component/InvestmentPerformance/InvestmentPerformance";
import ViewInvestment from "./Component/ViewInvestment/ViewInvestment";
import Recommend from "./Component/RecommendAnExchange/Recommend";
import Balancecard from "./Component/BalanceComponent/AllBalance";
import Transaction from "./Component/TabComponent/TabContent";
import "react-tabs/style/react-tabs.css";
export default class App extends Component {
  state = {
    amount: [
      {
        text: "Current Balance",
        balance: 20000,
        linkname: "VIEW ACCOUNT SUMMARY"
      },
      {
        text: "Available Balance",
        balance: 30000,
        linkname: "VIEW TRANSACTION SUMMARY"
      }
    ],
    transaction: [
      {
        id: 437590,
        enterdate: "10/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      },
      {
        id: 437592,
        enterdate: "12/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      },
      {
        id: 437595,
        enterdate: "14/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      }
    ],
    exchange: [
      {
        id: 437590,
        enterdate: "10/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      },
      {
        id: 437598,
        enterdate: "10/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      },
      {
        id: 437592,
        enterdate: "12/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      },
      {
        id: 437595,
        enterdate: "14/02/1998",
        exchangetype: "custom Exchange",
        Allocationtype: "custom Exchange",
        amount: 40000,
        status: "entered"
      }
    ]
  };

  render() {
    return (
      <div>
        <Div>
          <Headercontent />
        </Div>
        <div style={{ width: "100%", backgroundColor: "#eeeeee" }}>
          <Div>
            <div style={{ display: "flex",width:"100%",padding:"25px 0px"}}>
              <BalanceDiv>
                <Balancecard balAmount={this.state.amount} />
              </BalanceDiv>

              <TabDiv>
                <Tabs>
                  <TabList>
                    <Tab>Recent Exchanges</Tab>
                    <Tab>Exchange Schedule</Tab>
                  </TabList>
                  <TabDi>
                  <TabPanel>
                    <Transaction transactionData={this.state.transaction} />
                  </TabPanel>
                  <TabPanel>
                    <Transaction transactionData={this.state.exchange} />
                  </TabPanel>
                  </TabDi>
                </Tabs>
                <ViewLink href="#">
            <div>
                VIEW INVESTMENT PERFORMANCE
            </div>
            {/* <div style={{fontSize:"35px",color:"#006778",padding:"0px 0px 7px 25px"}}>&#8594;</div> */}
            <div style={{padding:"0px 10px"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
        </ViewLink>
                </TabDiv>
                
            </div>
            <DemoCarousel />
            <Recommend />
          </Div>
        </div>
        <Div>
          <Investmentperformance />
          <ViewInvestment />
        </Div>
      </div>
    );
  }
}
