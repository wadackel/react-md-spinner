/* eslint-disable react/prop-types */
import React, { Component } from "react";
import MDSpinner from "../../../src/MDSpinner";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      userAgent: props.userAgent
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { userAgent } = this.props;
    const { isMounted } = this.state;

    return (
      <div>
        <h1>{isMounted ? "Mounted" : "Loading..." }</h1>
        <MDSpinner userAgent={userAgent} />
      </div>
    );
  }
}
