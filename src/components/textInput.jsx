import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
    input: {
        width: '30%',
        padding: theme.paddingSM,
        border: 'none',
        borderBottom: '1px solid #000',
        textAlign: 'center',
        transition: 'all 0.5s ease',
        transitionProperty: 'width, borderBottom',
        '&:focus': {
            outline: 'none',
            width: '40%',
            borderBottom: `3px solid ${theme.colorPrimary}` 
        }
    }
});

const TextInput = ({ classes, name, value, change }) => (
  <input type="text" className={classes.input} name={name} value={value} onChange={change} />
);

export default injectSheet(styles)(TextInput);
