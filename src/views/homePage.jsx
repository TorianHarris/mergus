import React from "react";
import injectSheet from "react-jss";

import DropDown from "../components/dropdown";
import ActionButton from "../components/actionButton";
import ListCard from "../components/listCard";

const styles = theme => ({
  //TODO: make top bar sticky
  topBar: {
    position: "sticky",
    top: 0,
    width: '100%',
    paddingBottom: theme.paddingSM
  },
  container: {
    position: "relative"
  },
  targetContainer: {
    maxWidth: 700,
    margin: "auto"
  },
  targetDetails: {
    padding: theme.paddingSM
  }
});

const HomePage = ({ data, classes, targetClick }) => (
  <div className={classes.container}>
    <div className={classes.topBar}>
      <DropDown prefix="Sort By" items={["Name", "Date Added", "Status"]} />
      <ActionButton icon="add" />
    </div>
    <div className={classes.targetContainer}>
      {data.map((target, i, arr) => (
        <ListCard first={i === 0} last={i === arr.length - 1} click={() => targetClick(i)}>
          <p className={classes.targetDetails}>{target.name}</p>
          <ActionButton icon="delete" />
        </ListCard>
      ))}
    </div>
  </div>
);

export default injectSheet(styles)(HomePage);
