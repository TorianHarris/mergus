import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
    text: {
        textAlign: 'right'
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
        const { classes } = this.props
        return (
            <h3 className={classes.text}>Status: <span onClick={this.handleClick}> 
                 {this.state.status} 
                <FontAwesomeIcon icon={faSortDown} transform="up-2 right-2" />
                </span>
            </h3>
        )
    }

}


export default injectSheet(styles)(Status);