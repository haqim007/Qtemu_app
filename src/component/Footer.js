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
        marginLeft: '1%',
        marginTop: '1%',
        marginBottom: '1%',
        marginRight: '1%',
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 'auto',
    },
    footerNote: {
        marginLeft: '1%',
        marginTop: '4%',
        marginBottom: '1%',
        marginRight: '1%',
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
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <hr/>
                <center className={classes.footerNote}>Copyright Haqim 2019</center>
            </div>

        )
    };
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
