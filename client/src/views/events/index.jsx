import React, { Component } from 'react';
import { withStyles, Paper } from '@material-ui/core';

const styles = {
    body: {

    },
};

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.body}>
                <Paper>
                    <div>
                        Hello
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Events);
