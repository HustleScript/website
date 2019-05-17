import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

// import logoSvg from '../../src/logo';
// import CheckCircleOutlineIcon from '../Libs/CheckCircleOutline';

const styles = {
    logoContainer: {
        height: '48px',
    },
    logo: {
        height: '36px',
        margin: '5px',
    },
};

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // TODO: Add onClick functionality
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.logoContainer}>
                <img className={classes.logo} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Logo" />
            </div>
        );
    }
}

export default withStyles(styles)(Logo);
