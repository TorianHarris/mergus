import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  card: {
      borderRadius: handleBorder,
      backgroundColor: 'red',
      position: 'relative',
      overflow: 'hidden',
      margin: theme.marginY,
  }
})
const handleBorder = ({index}) => {
    console.log(index);
    // switch (pos) {
    //     case: ''
    // }
    // return `${} `;
}

const Card = ({ classes, children }) => (
<div className={classes.card}>
    {children}
</div>
)

export default injectSheet(styles)(Card);