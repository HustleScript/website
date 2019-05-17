import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import GlobalHeader from './globalHeader';

const styles = {

};

class PublicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <GlobalHeader />
            </div>
        );
    }
}

export default withStyles(styles)(PublicContainer);
