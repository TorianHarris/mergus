import React from "react";

import DropDown from "../components/dropdown";
import Brand from "../components/brand";
import Info from "../components/info";
import Contacts from "../components/contacts";
import Graph from "../components/graph";

const CompanyModal = ({ data }) => (
  <>
    <DropDown
      prefix="Status"
      items={["Researching", "Pending Approval", "Approved", "Declined"]}
    />
    <Brand name={data.name} />
    <hr />
    <Info content={data.description} />
    <Contacts contacts={data.contacts} />
    <Graph data={data.name} />
  </>
);

export default CompanyModal;