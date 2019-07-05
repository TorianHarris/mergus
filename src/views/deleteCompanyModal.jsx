import React from "react";
import injectSheet from "react-jss";

import Modal from "../components/modal";
import Button from "../components/button";

const styles = theme => ({
  container: {
    textAlign: "center"
  },
});

const DeleteCompanyModal = ({classes, target, handleDeleteTarget, open, handleClose}) => (
<Modal alert open={open} handleClose={handleClose}>
        <div className={classes.container}>
          <h3>Are you sure you want to delete {target.name}?</h3>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button color="red" click={handleDeleteTarget}>Delete</Button>
          <Button click={handleClose}>Close</Button>
          </div>
        </div>
      </Modal>
)

  

export default injectSheet(styles)(DeleteCompanyModal);
