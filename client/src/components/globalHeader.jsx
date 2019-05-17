import React, { Component } from 'react';
import { withStyles, Link } from '@material-ui/core';

import Logo from './logo';

const styles = {
    headerBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        width: '100%',
        height: '48px',
    },
    headerLinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLink: {
        margin: 'auto 10px',
        fontSize: '24px',
    },
};

class GlobalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerList: [{
                name: 'Header 1',
                path: '/header1',
            }, {
                name: 'Header 2',
                path: '/header2',
            }],
        };

        this.generateMenu = this.generateMenu.bind(this);
    }

    generateMenu(headers) {
        const { classes } = this.props;
        return (
            <div className={classes.headerLinks}>
                {headers.map(header => (
                    <Link className={classes.headerLink} to={header.path}>
                        {header.name}
                    </Link>
                ))}
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        const { headerList } = this.state;

        return (
            <div className={classes.headerBar}>
                <Logo />
                {this.generateMenu(headerList)}
            </div>
        );
    }
}

export default withStyles(styles)(GlobalHeader);
