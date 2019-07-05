import React, { Component } from "react";
import injectSheet from "react-jss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import ListCard from "./listCard";

const styles = theme => ({
  container: {
    display: "block",
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

  componentWillMount = () => {
    document.addEventListener("mousedown", this.handleClick);
    this.setState({
      header: this.props.current ? this.props.current : this.props.items[0]
    });
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClick);
  };

  handleClick = e => {
    if (this.node.contains(e.target)) {
      this.setState({
        open: true
      });
      return;
    }

    this.handleClose();
  };

  handleClose = () => {
    this.setState({
      open: false
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
      <div className={classes.container} ref={node => (this.node = node)}>
        <div>
          <h3>
            {prefix}: {this.state.header}
            <span>
              <FontAwesomeIcon icon={faSortDown} transform="up-2 right-4" />
            </span>
          </h3>
        </div>
        <div>
          {this.state.open
            ? items.map((item, i, arr) => (
                <ListCard
                  first={i === 0}
                  last={i === arr.length - 1}
                  click={() => this.handleSelect(item)}
                >
                  <h3 className={classes.item}>{item}</h3>
                </ListCard>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Dropdown);
