import React, { Component } from "react";
import { Slide, Subtitle } from "@sambego/diorama";

export default class Rainbow extends Component {
  state = {
    hue: 0,
    background: "rgb(0, 0, 0)"
  };

  static getHueForChannel(hue, channel) {
    const hueForChannel = hue - channel * 255;
    if (hueForChannel > 0) {
      if (hueForChannel > 255) {
        return 255;
      }

      return hueForChannel;
    }

    return 0;
  }

  constructor(props) {
    super(props);

    this.initAnimation();
  }

  initAnimation() {
    const maxHue = 765;
    const step = 1;

    window.setInterval(() => {
      const newHue =
        this.state.hue + step >= maxHue ? 0 : this.state.hue + step;
      const newColor = `rgb(${Rainbow.getHueForChannel(
        newHue,
        0
      )}, ${Rainbow.getHueForChannel(newHue, 1)}, ${Rainbow.getHueForChannel(
        newHue,
        2
      )})`;

      this.setState(state => ({
        ...state,
        hue: newHue,
        background: newColor
      }));
    }, 5);
  }

  render() {
    return (
      <Slide style={{ background: this.state.background }}>
        <Subtitle>Rainbows</Subtitle>
      </Slide>
    );
  }
}
