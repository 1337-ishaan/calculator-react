import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";
import { HotKeys, GlobalHotKeys } from "react-hotkeys";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  keyMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
    EQUAL: "enter",
    MULTIPLY: "shift+8",
    ADD: "shift+=",
    SUBTRACT: "-",
    DIVIDE: "/",
    AC: "c",
    DOT: ".",
    PERCENT: "shift+5",
  };

  handlers = {
    1: () => {
      this.props.clickHandler("1");
    },
    2: () => {
      this.props.clickHandler("2");
    },
    3: () => {
      this.props.clickHandler("3");
    },
    4: () => {
      this.props.clickHandler("4");
    },
    5: () => {
      this.props.clickHandler("5");
    },
    6: () => {
      this.props.clickHandler("6");
    },
    7: () => {
      this.props.clickHandler("7");
    },
    8: () => {
      this.props.clickHandler("8");
    },
    9: () => {
      this.props.clickHandler("9");
    },
    0: () => {
      this.props.clickHandler("0");
    },
    EQUAL: () => {
      this.props.clickHandler("=");
    },
    MULTIPLY: () => {
      this.props.clickHandler("x");
    },
    SUBTRACT: () => {
      this.props.clickHandler("-");
    },
    ADD: () => {
      this.props.clickHandler("+");
    },
    DIVIDE: () => {
      this.props.clickHandler("÷");
    },
    AC: () => {
      this.props.clickHandler("AC");
    },
    DOT: () => {
      this.props.clickHandler(".");
    },
    PERCENT: () => {
      this.props.clickHandler("%");
    },
  };

  render() {
    console.log(this.props.total, this.props.next, "button panel");
    return (
      <GlobalHotKeys keyMap={this.keyMap} handlers={this.handlers}>
        <div className="component-button-panel">
          <div>
            <Button name="AC" clickHandler={this.handleClick} red />
            <Button name="+/-" clickHandler={this.handleClick} orange />
            <Button name="%" clickHandler={this.handleClick} orange />
            <Button name="÷" clickHandler={this.handleClick} orange />
          </div>
          <div>
            <Button name="7" clickHandler={this.handleClick} />
            <Button name="8" clickHandler={this.handleClick} />
            <Button name="9" clickHandler={this.handleClick} />
            <Button name="x" clickHandler={this.handleClick} orange />
          </div>
          <div>
            <Button name="4" clickHandler={this.handleClick} />
            <Button name="5" clickHandler={this.handleClick} />
            <Button name="6" clickHandler={this.handleClick} />
            <Button name="-" clickHandler={this.handleClick} orange />
          </div>
          <div>
            <Button name="1" clickHandler={this.handleClick} />
            <Button name="2" clickHandler={this.handleClick} />
            <Button name="3" clickHandler={this.handleClick} />
            <Button name="+" clickHandler={this.handleClick} orange />
          </div>
          <div>
            <Button name="0" clickHandler={this.handleClick} wide />
            <Button name="." clickHandler={this.handleClick} />
            <Button name="=" clickHandler={this.handleClick} green />
          </div>
        </div>
      </GlobalHotKeys>
    );
  }
}
