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
    zIndex: 999,

  },
  modal: {
    position: "fixed",
    backgroundColor: "white",
    width: "92%",
    height: "92%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflow: 'scroll',
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
    if (this.props.selectCallback) this.props.selectCallback(item);
  };

  render() {
    const { classes, children, close } = this.props;
    return (
      <div className={classes.modalContainer} onClick={close}>
        <div className={classes.modal}>{children}</div>
      </div>
    );
  }
}

export default injectSheet(styles)(Modal);
