import React from "react";
import PropTypes from 'prop-types';
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


const HomePage = ({ targets, classes, targetClick, displayModal, handleDelete }) => (
  <div className={classes.container}>
    <div className={classes.topBar}>
      <DropDown prefix="Sort By" items={["Name", "Date Added", "Status"]} />
      <ActionButton icon="add" click={displayModal}/>
    </div>
    <div className={classes.targetContainer}>
      {Array.isArray(targets) ? targets.map((target, i, arr) => (
        <ListCard first={i === 0} last={i === arr.length - 1} click={() => targetClick(i)}>
          <p className={classes.targetDetails}>{target.name}</p>
          <ActionButton icon="delete" click={(e) => handleDelete(e, i)}/>
        </ListCard>
      )) : console.log(targets)}
    </div>
  </div>
);

HomePage.propTypes = {
  targets: PropTypes.array
}

export default injectSheet(styles)(HomePage);

