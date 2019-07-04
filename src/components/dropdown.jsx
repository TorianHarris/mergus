import React, { Component } from "react";
import injectSheet from "react-jss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import ListCard from "./listCard";

const styles = theme => ({
  text: {
    display: "block",
    // alignItems: "center",
    position: "relative",
    justifyContent: "flex-end",
    width: 250
  },
  item: {
    textAlign: "center",
    margin: 10
  }
});

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      header: ""
    };
  }

  componentDidMount = () => {
    this.setState({
      header: this.props.items[0]
    });
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleSelect = item => {
    this.setState({
        open: false,
        header: item
      });
  };

  render() {
    const { classes, items, prefix } = this.props;
    return (
      <div className={classes.text}>
        <div>
          <h3 onClick={this.handleClick}>
            {prefix}: {this.state.header}
            <span>
              <FontAwesomeIcon icon={faSortDown} transform="up-2 right-4" />
            </span>
          </h3>
        </div>
        {this.state.open ? (
          <div>
            {this.props.items.map((item, i, arr) => (
              <ListCard first={i === 0} last={i === arr.length - 1} click={() => this.handleSelect(item)}>
                <h3 className={classes.item}>
                  {item}
                </h3>
              </ListCard>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default injectSheet(styles)(Dropdown);
