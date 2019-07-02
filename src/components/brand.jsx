import React from 'react';
import injectSheet from 'react-jss';

import Card from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
  logo: {
    maxHeight: 100
  },
  title: {
    color: theme.textPrimary,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  actionButton: theme.actionButton,
})

const handleClick = () => {
  alert("Hello noob")
}

const Brand = ({ classes, name }) => (
  <Card>
    <div className={classes.container}>
      <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png' />
      <h1>{name}</h1>
        <FontAwesomeIcon className={classes.actionButton} onClick={handleClick} icon={faPencilAlt} />
    </div>
  </Card>
)

export default injectSheet(styles)(Brand);