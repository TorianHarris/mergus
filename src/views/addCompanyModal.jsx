import React, { Component } from "react";
import injectSheet from "react-jss";

import Modal from "../components/modal";
import Button from "../components/button";
import TextInput from "../components/textInput";

const styles = theme => ({
  container: {
    textAlign: "center"
  },
  header: {
    padding: theme.paddingSM
  },
  optionDivider: {
      padding: theme.paddingSM
  }
});

class AddCompanyModal extends Component {
  constructor() {
    super();

    this.state = {
      ticker: "",
      company: "",
      description: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const { classes, open, handleClose } = this.props;
    return (
      <Modal
        open={open}
        handleClose={handleClose}
        className={classes.container}
      >
        <div className={classes.container}>
          <h1>Add Company</h1>
          <h3>Enter a ticker symbol:</h3>
          <TextInput
            name="ticker"
            value={this.state.ticker}
            change={this.handleInputChange}
          />
          <Button>Hello</Button>
          <h2 className={classes.optionDivider}>OR</h2>

          <p>Name: </p>
          <TextInput
            name="company"
            value={this.state.company}
            change={this.handleInputChange}
          />
        </div>
      </Modal>
    );
  }
}

export default injectSheet(styles)(AddCompanyModal);
