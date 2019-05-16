import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

// Import Components
import PublicContainer from '../src/components/publicContainer'

const styles = {
    body: {
        backgroundColor: '#FBFAF8',
        minHeight: '-webkit-fill-available',
    },
};

class App extends PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <PublicContainer />
            </Router>
        );
    }
}
export default withStyles(styles)(App);
