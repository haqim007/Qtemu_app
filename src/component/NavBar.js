import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 0.1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  lastButton: {
    marginLeft: '68%',
  }
};

class ButtonAppBar extends React.Component {
  state = {
    createMeetupBtnColor: 'inherit',
  }
  render(){
    let { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon/>     */}
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Qtemu
            </Typography>
          </IconButton>
          <Button color={this.state.createMeetupBtnColor}>Create Meetup</Button>
          <Button color="inherit">Explore</Button>
          <Button color="inherit" className={classes.lastButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar);
