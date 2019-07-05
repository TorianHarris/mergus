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
import DeleteCompanyModal from "./views/deleteCompanyModal";

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
      viewCompanyDisplay: false,
      deleteCompanyDisplay: false
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
      viewCompanyDisplay: false
    });
  };

  handleAddModalClose = () => {
    this.setState({
      addCompanyDisplay: false
    });
  };

  handleAddTarget = newTarget => {
    const newArr = this.state.targets;
    newArr.push(newTarget);
    this.setState(
      {
        targets: newArr
      },
      () => {
        this.handleAddModalClose();
      }
    );
  };
  
  //find current targets in targets and remove it
  //TODO: find out why this code works without having to set the set of this.state.targets
  handleDeleteTarget = () => {
      const index = this.state.targets.find(el => el === this.state.currentTarget);
      const newArr = this.state.targets;
      newArr.splice(index, 1);
      this.handleDeleteModalClose();
      //TODO find out why this 
    // console.log('ds');
    //   this.setState = ({
    //       //targets: newArr,
    //   }, )
  }

  handleDeleteModalOpen = (event, index) => {
    this.setState({
        currentTarget: this.state.targets[index],
        deleteCompanyDisplay: true
      });
    event.stopPropagation();
  };

  handleDeleteModalClose = () => {
    this.setState({
      deleteCompanyDisplay: false
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <NavBar />
          <div style={theme.content}>
            <HomePage
              targets={this.state.targets}
              targetClick={this.handleTargetClick}
              displayModal={this.handleAddClick}
              handleDelete={this.handleDeleteModalOpen}
            />
          </div>
          <AddCompanyModal
            handleClose={this.handleAddModalClose}
            open={this.state.addCompanyDisplay}
            handleAddTarget={this.handleAddTarget}
          />
          <DeleteCompanyModal
            open={this.state.deleteCompanyDisplay}
            handleClose={this.handleDeleteModalClose}
            target={this.state.currentTarget}
            handleDeleteTarget={this.handleDeleteTarget}
          />
          <CompanyModal
            data={this.state.currentTarget}
            open={this.state.viewCompanyDisplay}
            handleClose={this.handleViewModalClose}
          />
        </>
      </ThemeProvider>
    );
  }
}
