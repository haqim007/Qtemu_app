import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SubmitButton from './SubmitButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginLeft: '1%',
    marginTop: '1%',
    marginBottom: '1%',
    marginRight: '1%',
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class Header extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoqefun03CweG306U4vC2BmnF-nIvSuLrD3bE3qlvhFfACpWn" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <b>Hacktiv8 Meetup</b>
                  </Typography>
                  <Typography gutterBottom>Location Jakarta</Typography>
                  <Typography gutterBottom>Members 1,078</Typography>
                  <Typography gutterBottom>Organizer Andy Wiranata</Typography>
                  {/*<Typography color="textSecondary">ID: 1030114</Typography>*/}
                </Grid>
                <Grid item>
                  <Typography style={{ cursor: 'pointer' }}>
                    <SubmitButton textBtn="Join Us"/>
                  </Typography>
                </Grid>
              </Grid>
              {/*<Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>*/}
            </Grid>
          </Grid>
        </Paper>
      </div>

  )};
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
