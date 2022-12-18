import React, { Component } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

import { ThemeContext } from "../context/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}
export default ThemeToggle;
