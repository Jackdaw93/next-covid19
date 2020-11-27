import React, { Component } from "react";
import IndexPage from "../components/Dashboard/IndexPage";
import fetch from "isomorphic-fetch";
const config = require("../config.json");

export default class indonesia extends Component {
   static async getInitialProps() {
      const data = await fetch(`${config["kawal-corona"].base_url}/indonesia`);
      const items = await data.json();
      const province = await fetch(
         `${config["kawal-corona"].base_url}/indonesia/provinsi`
      );
      const itemProvince = await province.json();
      const stat = await fetch(
         `${config["global-api"].base_url}${config["global-api"].total_live}/indonesia`
      );
      const statData = await stat.json();
      return {
         items,
         statData,
         itemProvince,
      };
   }
   render() {
      const { items, statData, itemProvince } = this.props;
      return (
         <IndexPage
            isGlobal={false}
            data={items}
            statistik={statData}
            provinsi={itemProvince}
         />
      );
   }
}
