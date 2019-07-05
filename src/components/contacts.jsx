import React from "react";
import injectSheet from "react-jss";

import Card from "./card";
import ListCard from "./listCard";
import ActionButton from "./actionButton";
import Contact from "./contact";

const styles = theme => ({
  header: {
    color: theme.textContent,
    padding: theme.paddingSM
  },
  contactContainer: {
      margin: theme.marginX,
      paddingBottom: theme.paddingSM
  }
});

const handleClick = () => {};

const Info = ({ classes, contacts }) => (
  <Card>
    <h1 className={classes.header}>Contacts</h1>
    <ActionButton click={handleClick} icon="add" />
    <div className={classes.contactContainer}>
      {contacts.length > 0 ? contacts.map((contact, i, arr) => (
        <ListCard first={i === 0} last={i === arr.length - 1}>
          <Contact info={contact} />
        </ListCard>
      )): 'No Contacts Yet'}
    </div>
  </Card>
);

export default injectSheet(styles)(Info);
