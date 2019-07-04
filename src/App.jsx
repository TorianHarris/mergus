import React, { Component } from "react";

import data from "./data.json";

// css imports
import "normalize.css";
import { ThemeProvider } from "react-jss";

//component imports
import NavBar from "./components/navbar";
import HomePage from "./views/homePage";
import CompanyModal from "./views/companyModal";

//theming css
const theme = {
  colorPrimary: "#607d8b",
  colorSecondary: "grey",
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
      modalDisplay: true
    };
  }

//   componentDidMount = () => {
//     this.setState({
//         targets: data,
//         currentTarget: data[0], 
//     });
//   }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <NavBar />
          <div style={theme.content}>
            <HomePage data={this.state.target} />
            {this.state.modalDisplay ? <CompanyModal data={this.state.currentTarget} /> : null}
          </div>
        </>
      </ThemeProvider>
    );
  }
}
