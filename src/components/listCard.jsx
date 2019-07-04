import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  card: {
      border: `0.5px solid gray`,
      borderRadius: handleBorder,
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
          backgroundColor: 'gray',
          color: 'white'
      }
  }
})
const handleBorder = ({first, last}) => {
    const top = first ? 7 : 0;
    const bottom = last ? 7 : 0;
    return `${top}px ${top}px ${bottom}px ${bottom}px`;
}

const Card = ({ classes, children, click }) => (
<div className={classes.card} onClick={click}>
    {children}
</div>
)

export default injectSheet(styles)(Card);