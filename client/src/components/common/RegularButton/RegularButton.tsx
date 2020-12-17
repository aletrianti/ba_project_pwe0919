import React from 'react';
import { Link } from 'react-router-dom';
import './RegularButton.scss';

//import * as variables from '../../_exports.scss';

// Material UI
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Find a way to export scss variables in react components
const styles = () => createStyles({
    button: {
        backgroundColor: '#FFFFFF',
        borderColor: '#A3A3A3',
        color: '#011117',
        fontWeight: 'bold',
    }
});

interface StyleProps extends WithStyles<typeof styles> {}

interface RegularButtonProps extends StyleProps {
    btnText: string
}

class RegularButton extends React.Component<RegularButtonProps> {
    render() {
        const { classes, btnText } = this.props;

        return (
            <div className="regular-button__container">
                <Button variant="outlined" color="primary" className={classes.button}>
                    <Link to="/sign-up" className="link--dark-blue">{ btnText }</Link>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(RegularButton);