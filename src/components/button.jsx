import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  button: {
    border: "none",
    borderRadius: 5,
    padding: `${theme.paddingSM}px ${theme.paddingMD}px ${theme.paddingSM}px ${theme.paddingMD}px`,
    color: "white",
    backgroundColor: theme.colorPrimary,
    fontSize: 28,
    textAlign: 'center',
    margin: theme.marginY,
    transition: 'background-color 0.5s ease',
    "&:focus": {
        outline: 'none',
    },
    "&:hover": {
        backgroundColor: theme.colorPrimaryDark
    }
  }
});

const Button = ({ classes, children, click }) => (
  <div>
    <button type="text" className={classes.button} onClick={click}>
      {children}
    </button>
  </div>
);

export default injectSheet(styles)(Button);
