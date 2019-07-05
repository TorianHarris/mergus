import React from "react";

import Modal from "../components/modal"
import DropDown from "../components/dropdown";
import Brand from "../components/brand";
import Info from "../components/info";
import Contacts from "../components/contacts";
import Graph from "../components/graph";

const CompanyModal = ({ data, open, handleClose, targetUpdate }) => (
  <Modal open={open} handleClose={handleClose}>
    <DropDown
      prefix="Status"
      current={data.status}
      items={["Researching", "Pending Approval", "Approved", "Declined"]}
    />
    <Brand name={data.name} />
    <hr />
    <Info content={data.description} />
    <Contacts contacts={data.contacts} />
    {/* <Graph data={data.name} /> */}
  </Modal>
);

export default CompanyModal;