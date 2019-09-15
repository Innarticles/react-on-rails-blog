import React, { Component } from "react"
import App from "../commons/App.jsx"
import axios from 'axios'
import {

} from "../commons/App.jsx"
import {

} from "reactstrap"

class Index extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const { data, header } = this.props;
    return (
      <App appProps={this.props}>
        <h1>{data.helloReact}</h1>
      </App>
    );
  }
}

export default Index
