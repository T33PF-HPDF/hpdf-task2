
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 2,
  },
  head: {
        'font-weight':'bold',

  },
  selected: {
      'backgroundColor':'silver',
  },

  addtable: {

    width: 110,
    float: 'right',
    margin: 5

  }
});

function ListOfTables(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem className = {classes.head}>
          <ListItemText primary="Tables" className = {classes.head} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list" className= {classes.selected} onClick={()=>{alert('clicked')}}>
          <ListItemText primary="Nutrition"  />
        </ListItem>
          <Button color="accent"  className= {classes.addtable}  > Add table </Button>
    
      </List>
    </div>
  );
}

ListOfTables.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListOfTables);

/**
 * What should this component receive
 * tables[]
 * onAddTable()
 * onTableClicked
 */