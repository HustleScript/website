import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import GlobalHeader from './globalHeader';
import Events from '../views/events';

const styles = {

};

class PublicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
        };
    }

    commponentWillReceiveProps(nextProps) {
        const { auth } = nextProps;
        console.log('found auth: ', auth);
        if (auth) this.setState({ authenticated: auth });
    }

    render() {
        // TODO: link back to login page
        return (
            <Router>
                <div>
                    <GlobalHeader />
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/events" component={Events} />
                    {/* <Route path="/topics" component={Topics} /> */}
                </div>
            </Router>
        );
    }
}

export default withStyles(styles)(PublicContainer);
