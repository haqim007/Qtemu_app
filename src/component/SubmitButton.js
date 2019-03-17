import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ContainedButtons extends React.Component {
  render(){
    const { classes } = this.props;
    return (
        <Button variant="contained" color="primary" className={classes.button}>
          {this.props.textBtn}
        </Button>        
    );
  }
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
