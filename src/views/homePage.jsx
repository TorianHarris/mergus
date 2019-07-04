import React from "react";
import injectSheet from 'react-jss';

import DropDown from "../components/dropdown";
import ActionButton from "../components/actionButton";
import Info from "../components/info";
import Contacts from "../components/contacts";
import Graph from "../components/graph";

const styles = {
  container: {
    position: 'relative'
  }
}

const HomePage = ({ data }) => (
  <div>
  <DropDown
    prefix="Sort By"
    items={["Name", "Date Added", "Status"]}
  />
  <ActionButton icon='add'/>
  {}
  </div>
);

export default injectSheet(styles)(HomePage);
