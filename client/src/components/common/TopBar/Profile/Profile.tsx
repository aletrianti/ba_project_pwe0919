import React from 'react';
import './Profile.scss';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';

import { withStyles } from '@material-ui/core/styles';

import store from '../../../..';

interface ProfileProps {
  fullName: string;
  jobTitle: string;
  department?: string;
  birthday?: string; // Date
  memberSince?: string; // Date
  description?: string;
  profilePicture?: any; // ?
  isAvailable?: boolean;
}

interface ProfileState {
  isChecked: boolean | undefined;
}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: any) {
    super(props);

    this.state = {
      //isChecked: this.props.isAvailable
      isChecked: false,
    };
  }

  render() {
    const { fullName, jobTitle, department, birthday, memberSince, description, profilePicture, isAvailable } = this.props;

    const CustomSwitch = withStyles({
      switchBase: {
        color: '#A3A3A3',
        '&$checked': {
          color: '#F9AB55',
          '& + $track': {
            opacity: 1,
            backgroundColor: '#FBCD99',
            borderColor: '#FBCD99',
          },
        },
      },
      track: {
        border: '1px solid #C4C4C4',
        opacity: 1,
        backgroundColor: '#C4C4C4',
      },
      checked: {},
    })(Switch);

    const setAvailability = () => {
      const state = store.getState();

      //this.setState({ isChecked: isAvailable });
      this.setState({ isChecked: !this.state.isChecked });
      console.log(this.state.isChecked);
    };

    return (
      <div className="profile__container">
        <div id="profile__container__internal">
          <div id="arrow"></div>
          <div id="profile__card">
            <div id="profile__card__photo__container">
              {profilePicture ? (
                <img src={profilePicture} className="profile__card__photo__img" />
              ) : (
                <div className="profile__card__photo__img img--no-picture"></div>
              )}
            </div>
            <div id="profile__card__main__content">
              <div id="profile__name">
                <h5 id="profile__full-name">{fullName}</h5>
                <div id="profile__actions">
                  <MoreVertIcon />
                </div>
              </div>
              <div id="profile__availability">
                <span>Buddy availability:</span>
                <div className="profile__switch">
                  <CustomSwitch
                    checked={this.state.isChecked ? this.state.isChecked : false}
                    onChange={() => setAvailability()}
                  />
                </div>
              </div>
            </div>
            <div id="profile__card__info">
              <p>
                <span>
                  <b>Birthday: </b>
                  {birthday}
                </span>
                <span>
                  <b>Job position: </b>
                  {jobTitle}
                </span>
                <span>
                  <b>Department: </b>
                  {department}
                </span>
                <span>
                  <b>Member since: </b>
                  {memberSince}
                </span>
                <span>
                  <b>Description: </b>
                  {description}
                </span>
                <span id="profile__card__info__contact__wrapper">
                  <button id="profile__card__info__contact">
                    Contact <QuestionAnswerIcon />
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
