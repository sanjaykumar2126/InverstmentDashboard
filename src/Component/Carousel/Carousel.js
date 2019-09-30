import React, { Component } from "react";
import "./Styled.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Division, H3, Div, Divisions,A} from "./Styled";
class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} infiniteLoop={true}>
        <Division>
          <div style={{flexBasis:"30%"}}>
            <H3>Featured</H3>
            <Div>Learn how to value your Contribution</Div>
          </div>
          <Divisions>
            <div style={{ padding: "40px 0px 20px",color:"#505050" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud dolore magna ali.
            </div>
            <A href="#">
            <div>
                LEARN MORE
            </div>
            <div style={{fontSize:"27px",color:"#006778",paddingLeft:"15px"}}>&#8594;</div>
        </A>
          </Divisions>
        </Division>
        <Division>
          <div style={{flexBasis:"30%"}}>
            <H3>Featured</H3>
            <Div>Learn how to value your Contribution</Div>
          </div>
          <Divisions>
            <div style={{ padding: "40px 0px 20px",color:"#505050" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud dolore magna ali.
            </div>
            <A href="#">
            <div>
                LEARN MORE
            </div>
            <div style={{fontSize:"27px",color:"#006778",paddingLeft:"15px"}}>&#8594;</div>
        </A>
          </Divisions>
        </Division>
        <Division>
          <div style={{flexBasis:"30%"}}>
            <H3>Featured</H3>
            <Div>Learn how to value your Contribution</Div>
          </div>
          <Divisions>
            <div style={{ padding: "40px 0px 20px",color:"#505050" }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud dolore magna ali.
            </div>
            <A href="#">
            <div>
                LEARN MORE
            </div>
            <div style={{fontSize:"27px",color:"#006778",paddingLeft:"15px"}}>&#8594;</div>
        </A>
          </Divisions>
        </Division>
      </Carousel>
    );
  }
}
export default DemoCarousel;
