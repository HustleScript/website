import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Logo from './logo';

const styles = {
    headerBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        width: '100%',
        height: '48px',
    },
    headerLeft: {

    },
    headerRight: {
        display: 'flex',
        justifyContent: 'space-between',
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
                name: 'Events',
                path: '/events',
            }, {
                name: 'Blog',
                path: '/blog',
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
                <div className={classes.headerLeft}>
                    <Logo src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                </div>
                <div className={classes.headerRight}>
                    {this.generateMenu(headerList)}
                    <Logo src="https://cdn2.iconfinder.com/data/icons/budicon-user/16/32-user_-_single-512.png" />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(GlobalHeader);
