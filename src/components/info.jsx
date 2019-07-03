import React from 'react';
import injectSheet from 'react-jss';

import Card from './card'

const styles = theme => ({
    container: {
        padding: theme.paddingMD,
    },
    text: {
        textIndent: 50,
        margin: theme.marginX,
        lineHeight: 1.6,
    }
})

const Info = ({ classes, content }) => (
    //<Card>
        <div >
            <p className={classes.text}>
                {content}
            </p>
        </div>
    //</Card>
)

export default injectSheet(styles)(Info);