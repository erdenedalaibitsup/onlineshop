import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';

import { Drawer, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'

const useStyles = makeStyles({
    drawer: {
        width: '160px'
    }
})
const Index = (pros) => {
    const classes = useStyles();
    return <Drawer variant="permanent" className={classes.drawer}>
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </Drawer>
}

export default Index;