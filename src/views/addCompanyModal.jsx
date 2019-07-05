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
    const { classes, open, handleClose, handleAddTarget } = this.props;
    return (
      <Modal open={open} handleClose={handleClose}>
        <div className={classes.container}>
          <h1>Add Company</h1>
          <hr />
          <h3>Enter a ticker symbol:</h3>
          <TextInput
            name="ticker"
            value={this.state.ticker}
            change={this.handleInputChange}
          />
          <Button click={this.handleFindCompany}>Find Company</Button>
          This feature will be available soon{/*TM*/}
          <h2 className={classes.optionDivider}>OR</h2>
          <h3>Manually enter company:</h3>
          <p>Name:</p>
          <TextInput
            name="company"
            value={this.state.company}
            change={this.handleInputChange}
          />
          <p>Description:</p>
          <TextArea
            name="description"
            value={this.state.description}
            change={this.handleInputChange}
          />
          <Button
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
          </Button>
        </div>
      </Modal>
    );
  }
}

export default injectSheet(styles)(AddCompanyModal);
