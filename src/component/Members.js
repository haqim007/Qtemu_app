import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginLeft: '4%',
        marginBottom: '4%',
        marginRight: '4%',
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

class Members extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Grid item xs={12} container>
                    <Grid item xs direction="column" style={{marginLeft: '2%', marginRight: '60%'}}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <h2>Members</h2>
                            </Typography>
                            {/* <Typography gutterBottom></Typography> */}
                        </Grid>
                    </Grid>
                    <Grid item xs direction="column" style={{ marginLeft: '25%'}}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <a href="#">See All</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <CardHeader
                            avatar={
                              <Avatar aria-label="Recipe" className={classes.avatar}>
                              </Avatar>
                            }
                        />
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        <b>Hacktiv8 Meetup</b>
                                    </Typography>
                                    <Typography gutterBottom>Andy Wiranata &nbsp;   4 others</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Fragment>

        )
    };
}

Members.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Members);
