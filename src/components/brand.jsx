import React from "react";
import injectSheet from "react-jss";

import ActionButton from "./actionButton";
//import img from "../logos/apple-logo.png";

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
    {/* <img
      className={classes.logo}
      src={img}
    /> */}
    <h1 className={classes.title}>{name}</h1>
    <ActionButton click={handleClick} icon="edit" />
    <p>{info}</p>
  </div>
);

export default injectSheet(styles)(Brand);
