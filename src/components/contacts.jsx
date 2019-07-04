import React from 'react';
import injectSheet from 'react-jss';

import Card from './card';
import ActionButton from './actionButton';
import Contact from './contact';

const styles = theme => ({
    header: {
        color: theme.textContent,
        padding: theme.paddingSM
    }
})

const handleClick = () => {

}

const Info = ({ classes, contacts }) => (
    <Card>
        <h1 className={classes.header}>Contacts</h1>
        <ActionButton click={handleClick} icon='add'/>
        <hr/>
        {contacts.map((contact) => 
            <Contact info={contact}/>
        )}
    </Card>
)

export default injectSheet(styles)(Info);