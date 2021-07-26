import React, { useState } from "react";
import styled from "styled-components";
import NumberFormat from "./NumberFormat";

const sliderThumbStyles = (props) => `
    width:25px;
    height:25px;
    border-radius: 50%; 
    padding:10px;
    background :#577B0A;
    cursor : pointer;
    -webkit-transition : .2s;
    transition : opacity .2s

`;

const Styles = styled.div`

flex-direction:column;
align-items:center;
color:#577B0A;
margin-top: 2rem;
margin-bottom : 2rem;


.slider{
  flex:6;
  -webkit-appearance : none;
  width:480px;
  height:7px;
  border-radius:5px;
  background #white;
  outline: none;
  /* #### Mobile Phones Portrait #### */
    @media screen and (max-device-width: 480px) and (orientation: portrait){
      width:340px;
    }

    /* #### Mobile Phones Landscape #### */
    @media screen and (max-device-width: 640px) and (orientation: landscape){
      /* some CSS here */
    }

  &::-webkit-slider-thumb {
    flex:6;
    -webkit-appearance : none;
    appearance:none;
    ${(props) => sliderThumbStyles(props)}
  }

  &::-moz-range-thumb {
    ${(props) => sliderThumbStyles(props)}
  }
}



`;
export default class Slider extends React.Component {
  state = {
    value: this.props.value,
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.callBackFromParent(e.target.value)
  };

  

  render() {
    return (
      <div data={this.state}>
        <div className="value_class">{NumberFormat(this.state.value)}</div>
        <Styles>
          <input
            type="range"
            min={this.props.min}
            max={this.props.max}
            value={this.state.value}
            onChange={this.handleOnChange}
            className="slider"
            step={this.props.step}
          />
          <div className="input_range_text">
            <div className="left_text">{this.props.left_text}</div>
            <div className="right_text">{this.props.right_text}</div>
          </div>
        </Styles>
      </div>
    );
  }
}
