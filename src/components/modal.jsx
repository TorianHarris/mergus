import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  modalContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 999
  },
  modal: {
    position: "fixed",
    backgroundColor: "white",
    width: "90%",
    height: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflow: "scroll",
    borderRadius: 4,
    padding: theme.paddingSM
  }
});

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  componentWillMount = () => {
    document.addEventListener("mousedown", this.handleClick);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClick);
  };

  handleClick = e => {
    if (this.props.open && this.node.contains(e.target)) {
      return;
    }

    this.props.handleClose();
  };

  handleSelect = item => {
    this.setState({
      open: false,
      header: item
    });
    if (this.props.selectCallback) this.props.selectCallback(item);
  };

  render() {
    const { classes, children, open } = this.props;
    return open ? (
      <div className={classes.modalContainer}>
        <div className={classes.modal} ref={node => (this.node = node)}>
          {children}
        </div>
      </div>
    ) : null;
  }
}

export default injectSheet(styles)(Modal);
