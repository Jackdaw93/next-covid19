import React, { Component } from "react";
import IndexPage from "../components/Dashboard/IndexPage";
import fetch from "isomorphic-fetch";
const config = require("../config.json");

export default class index extends Component {
   static async getInitialProps() {
      const data = await fetch(config["kawal-corona"].base_url);
      const items = await data.json();
      return {
         items,
      };
   }
   render() {
      const { items } = this.props;
      return <IndexPage isGlobal={true} data={items} />;
   }
}
