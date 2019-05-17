import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import Logo from './logo';

const styles = {
    headerBar: {
        backgroundColor: 'red',
        width: '100%',
        height: '48px',
    },
};

class GlobalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.headerBar}>
                <Logo />
            </div>
        );
    }
}

export default withStyles(styles)(GlobalHeader);
