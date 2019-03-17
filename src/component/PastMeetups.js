import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SubmitButton from './SubmitButton';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: "theme.spacing.unit * 3",
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1236,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        // padding: `${theme.spacing.unit * 8}px 0`,
        marginLeft: 'auto',
        marginRight: '4%',
        
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Album(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            {/* <Grid item xs={12} container>
                <Grid item xs direction="column" style={{ marginLeft: '2%' }}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            <h2>Past Meetups</h2>
                        </Typography>
                        <Typography gutterBottom></Typography>
                    </Grid>
                </Grid>
            </Grid> */}
            <Grid item xs={12} container>
                <Grid item xs direction="column" style={{ marginLeft: '2%', marginRight: '60%' }}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            <h2>Past Meetups</h2>
                        </Typography>
                        {/* <Typography gutterBottom></Typography> */}
                    </Grid>
                </Grid>
                <Grid item xs direction="column" style={{ marginLeft: '25%' }}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            <a href="#">See All</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                        <Grid item key={cards} sm={6} md={4} lg={4}>
                            <Card className={classes.cards}>
                                <CardContent className={classes.cardContent}>
                                    {/* <Typography gutterBottom variant="h6" component="h6"> */}
                                    <b>27 November 2017</b>
                                        <hr/>
                                    {/* </Typography> */}
                                    <Typography>
                                        <b>#39 JakartaJS April Meetup with Kumparan</b>
                                    </Typography>
                                
                                </CardContent>
                                <CardContent className={classes.cardContent}>
                                    <Typography color="textSecondary">
                                        <b>139</b> went
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <SubmitButton textBtn="View" />
                                </CardActions>
                            </Card>
                        </Grid>
                    <Grid item key={cards} sm={6} md={4} lg={4}>
                        <Card className={classes.cards}>
                            <CardContent className={classes.cardContent}>
                                {/* <Typography gutterBottom variant="h6" component="h6"> */}
                                <b>27 October 2017</b>
                                <hr />
                                {/* </Typography> */}
                                <Typography>
                                    <b>#38 JakartaJS April Meetup with BliBli</b>
                                </Typography>
                            </CardContent>
                            <CardContent className={classes.cardContent}>
                                <Typography color="textSecondary">
                                    <b>113</b> went
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <SubmitButton textBtn="View" />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item key={cards} sm={6} md={4} lg={4}>
                        <Card className={classes.cards}>
                            <CardContent className={classes.cardContent}>
                                {/* <Typography gutterBottom variant="h6" component="h6"> */}
                                <b>27 September 2017</b>
                                <hr />
                                {/* </Typography> */}
                                <Typography>
                                    <b>#37 JakartaJS April Meetup with Hacktiv8</b>
                                </Typography>



                            </CardContent>
                            <CardContent className={classes.cardContent}>
                                <Typography color="textSecondary">
                                    <b>110</b> went
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <SubmitButton textBtn="View" />
                            </CardActions>
                        </Card>
                    </Grid>                    
                </Grid>
            </div>
        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);