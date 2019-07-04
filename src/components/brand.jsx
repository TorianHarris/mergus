import React from "react";
import injectSheet from "react-jss";

import ActionButton from "./actionButton";

const styles = theme => ({
  logo: {
    maxHeight: 50,
    padding: theme.paddingSM
  },
  title: {
    margin: 0
  },
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative"
  }
});

const handleClick = () => {
  alert("Hello noob");
};

const Brand = ({ classes, name, info }) => (
  <div className={classes.container}>
    <img
      className={classes.logo}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png"
    />
    <h1 className={classes.title}>{name}</h1>
    <ActionButton click={handleClick} icon="edit" />
    <p>{info}</p>
  </div>
);

export default injectSheet(styles)(Brand);
