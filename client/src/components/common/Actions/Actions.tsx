import React, { MouseEvent } from 'react';
import './Actions.scss';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { isCurrentUserAnAdmin } from '../../../utils/localStorageActions';

interface ActionsState {
  isOpen: boolean;
}

interface IAction {
  name: string;
  function: any;
}

interface ActionsProps {
  actions?: IAction[];
  type?: string;
}

class Actions extends React.Component<ActionsProps, ActionsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleActions = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        {this.props.type === 'profile' ? (
          <div className="actions__container">
            <div className="actions__icon" onClick={() => this.toggleActions()}>
              <EditIcon />
            </div>
          </div>
        ) : (
          [
            isCurrentUserAnAdmin() ? (
              <div className="actions__btns__wrapper" key={'actions__btns__wrapper'}>
                {this.props.actions &&
                  this.props.actions.map((action, i) => {
                    return (
                      <button
                        onClick={action.function}
                        key={i}
                        className={action.name === 'Edit' ? 'action__btn edit__btn' : 'action__btn delete__btn'}
                        aria-label={action.name === 'Edit' ? 'Edit' : 'Delete'} // Needed for accessibility
                      >
                        {action.name === 'Edit' ? <EditIcon /> : <DeleteIcon />}
                      </button>
                    );
                  })}
              </div>
            ) : null,
          ]
        )}
      </>
    );
  }
}

export default Actions;
