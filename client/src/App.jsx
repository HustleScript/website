import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

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
                <div className={classes.body}>
                  Hello
                </div>
            </Router>
        );
    }
}
export default withStyles(styles)(App);
