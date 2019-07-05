import React, { Component } from "react";
import injectSheet from "react-jss";

import Modal from "../components/modal";
import Button from "../components/button";
import TextInput from "../components/textInput";
import TextArea from "../components/textArea";

const styles = theme => ({
  container: {
    textAlign: "center"
  },
  optionDivider: {
    padding: theme.paddingSM
  }
});

const DeleteCompanyModal = ({classes, target, handleDelete, open, handleClose}) => (
<Modal open={open} handleClose={handleClose}>
        <div className={classes.container}>
          <h3>Are you sure you want to delete {target.name}?</h3>
          {/* <Button
            click={() => {
              handleAddTarget({
                name: this.state.company,
                description: this.state.description,
                earnings: [],
                status: "Researching",
                contacts: []
              })
              this.setState({
                ticker: "",
                company: "",
                description: ""
              })}
            }
          >
            Add Company
          </Button> */}
        </div>
      </Modal>
)

  

export default injectSheet(styles)(DeleteCompanyModal);
