import React from 'react';
import injectSheet from 'react-jss';

import ListCard from './listCard';
import ActionButton from './actionButton';

const styles = theme => ({
    logo: {
        maxHeight: 50,
        padding: theme.paddingSM,
    },
    title: {
        margin: 0,
    },
    container: {
        margin: theme.marginX,
    },
})

const handleClick = () => {
    alert("Hello noob")
}

const Contact = ({ classes, info }) => (
    <div className={classes.container}>
            <p>
                {info.name} | {info.position}
            </p>
    </div>
)

export default injectSheet(styles)(Contact);