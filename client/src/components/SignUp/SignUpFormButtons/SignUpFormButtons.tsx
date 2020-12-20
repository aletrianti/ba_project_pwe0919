import React from 'react';

import Button from '../../common/Button/Button';

class SignUpFormButtons extends React.Component {
    render() {
        return (
            <div className="sign-up__form__btns">
                <Button 
                    btnText={'Back'} 
                    isRegular={true} 
                    isBackFormBtn={true}
                />
                <Button btnText={'Confirm'} isRegular={false} />
            </div>
        );
    }
}

export default SignUpFormButtons;
