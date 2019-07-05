import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  input: {
    display: "block",
    padding: theme.paddingSM,
    borderRadius: 4,
    border: `1px solid black`,
    margin: theme.marginY,
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'border 0.5s ease',
    "&:focus": {
      outline: "none",
      border: `2px solid ${theme.colorPrimary}`,
    }
  }
});

const TextArea = ({ classes, name, value, change }) => (
    <textarea className={classes.input} cols="50" rows="10" name={name} value={value} onChange={change}/>
);

export default injectSheet(styles)(TextArea);
