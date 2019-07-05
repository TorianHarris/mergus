import React from "react";
import injectSheet from "react-jss";

const styles = (theme) => ({
  button: ({color}) => ({
    border: "none",
    borderRadius: 5,
    padding: `${theme.paddingSM}px ${theme.paddingMD}px ${theme.paddingSM}px ${theme.paddingMD}px`,
    color: "white",
    backgroundColor: color ? color : theme.colorPrimary,
    fontSize: 28,
    textAlign: 'center',
    margin: 20,
  })
});

const Button = ({ classes, children, click }) => (
  <div>
    <button type="text" className={classes.button} onClick={click}>
      {children}
    </button>
  </div>
);

export default injectSheet(styles)(Button);
