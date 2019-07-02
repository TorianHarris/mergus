import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  logo: {
    maxHeight: 100
  },
  title: {
    color: theme.textPrimary,
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
})

class Status extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
            status: 'Pending'
        }
    }
    handleClick = () => {
        alert("Hello World!");
    }

    render() {
        return(
            <h3>Status:
                <span onClick={this.handleClick}> {this.state.status}</span>
            </h3>
        )
    }

}


export default injectSheet(styles)(Status);