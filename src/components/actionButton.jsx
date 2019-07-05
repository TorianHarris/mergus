import React from "react";
import injectSheet from "react-jss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import button from "./button";

const styles = theme => ({
  actionButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.paddingSM,
    zIndex: 900,
    '&:hover' : {
        color: 'red'
    }
  }
});

const handleIcon = icon => {
  switch (icon) {
    case "edit":
      return faPen;
    case "add":
      return faPlus;
    case "delete":
      return faTrashAlt;
    default:
      return null;
  }
};

const ActionButton = ({ classes, icon, click }) => (
  <FontAwesomeIcon
    className={classes.actionButton}
    icon={handleIcon(icon)}
    onClick={click}
    size="lg"
  />
);

export default injectSheet(styles)(ActionButton);
