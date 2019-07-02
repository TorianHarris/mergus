import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  card: {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      borderRadius: 7,
  }
}

const Card = ({ classes, children }) => (
<div className={classes.card}>
    {children}
</div>
)

export default injectSheet(styles)(Card);