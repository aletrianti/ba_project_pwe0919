import React from 'react';
import './SignUpFinalStep.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import SignUpFormButtons from '../SignUpFormButtons/SignUpFormButtons';

const styles = createStyles({
    icon: {
        fontSize: '150px',
        color: '#F9AB55'
    }
})

interface StyleProps extends WithStyles<typeof styles>{}

class SignUpFinalStep extends React.Component<RouteComponentProps & StyleProps> {
    render() {
        const { classes } = this.props;

        return (
            <div id="final-step__container">
                <div id="final-step__container__info">
                    <CheckCircleIcon className={classes.icon}/>

                    <h3>You are good to go!</h3>
                </div>

                <SignUpFormButtons />
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(SignUpFinalStep));
