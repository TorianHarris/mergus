import React, { Component } from "react";

import data from "./data.json";

// css imports
import "normalize.css";
import { ThemeProvider } from "react-jss";

//component imports
import NavBar from "./components/navbar";
import HomePage from "./views/homePage";
import CompanyModal from "./views/companyModal";
import AddCompanyModal from "./views/addCompanyModal";

//theming css
const theme = {
  colorPrimary: "#607d8b",
  colorPrimaryDark: "#60688b",
  colorSecondary: "#eb0009",
  textPrimary: "white",
  textSecondary: "grey",
  textContent: "grey",
  paddingSM: 10,
  paddingMD: 25,
  marginX: "0px 20px 0px 20px",
  marginY: "20px 0px 20px 0px",

  content: {
    width: "95%",
    margin: "auto",
    marginTop: 70
  }
};

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      targets: data,
      currentTarget: data[0],
      addCompanyDisplay: false,
      viewCompanyDisplay: false
    };
  }

  handleTargetClick = index => {
    this.setState({
      currentTarget: data[index],
      viewCompanyDisplay: true
    });
  };

  handleAddClick = () => {
    this.setState({
      addCompanyDisplay: true
    });
  };

  handleViewModalClose = () => {
    this.setState({
      viewCompanyDisplay: false,
    });
  };

  handleAddModalClose = () => {
    this.setState({
      addCompanyDisplay: false
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <NavBar />
          <div style={theme.content}>
            <HomePage
              data={this.state.targets}
              targetClick={this.handleTargetClick}
              displayModal={this.handleAddClick}
            />
          </div>
          <AddCompanyModal
            handleClose={this.handleAddModalClose}
            open={this.state.addCompanyDisplay}
          />
          <CompanyModal
            data={this.state.currentTarget}
            handleClose={this.handleViewModalClose}
            open={this.state.viewCompanyDisplay}
          />
        </>
      </ThemeProvider>
    );
  }
}
