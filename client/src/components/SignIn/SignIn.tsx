import { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm';

// styles
import './SignIn.scss';
//import * as variables from '../../_exports.scss';

// Material UI
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => createStyles({
    button: {
        backgroundColor: '#FFFFFF',
        borderColor: '#A3A3A3',
        color: '#011117',
        fontWeight: 'bold',
    }
});

interface Props extends WithStyles<typeof styles>{}

class SignIn extends Component<Props> {
    render() {
        const { classes } = this.props;

        return (
            <div id="sign-in__wrapper">
                <div id="link-btn__wrapper">
                    <Button variant="outlined" color="primary" className={classes.button}>
                        <Link to="/sign-up" className="link--dark-blue">Sign up</Link>
                    </Button>
                </div>

                <SignInForm />
            </div>
        );
    }
}

export default withStyles(styles)(SignIn);
