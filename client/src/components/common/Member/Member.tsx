import React from 'react';
import './Member.scss';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

interface MemberProps {
  fullName: string;
  jobTitle: string;
  department?: string;
  birthday?: string; // Date
  memberSince?: string; // Date
  description?: string;
  profilePicture?: any; // ?
}

class Member extends React.Component<MemberProps> {
  render() {
    const { fullName, jobTitle, department, birthday, memberSince, description, profilePicture } = this.props;

    return (
      <div className="member__section">
        <div className="member__card">
          <div className="member__card__photo__container">
            {profilePicture ? (
              <img src={profilePicture} className="member__card__photo__img" alt="member" />
            ) : (
              <div className="member__card__photo__img img--no-picture"></div>
            )}
          </div>
          <div className="member__card__info">
            <h5 className="member__card__info__name">{fullName}</h5>
            <span className="member__card__info__job-title">{jobTitle}</span>
            <button className="member__card__info__contact">
              Contact <QuestionAnswerIcon />
            </button>
          </div>
        </div>

        <div className="member__info">
          <div className="arrow"></div>
          <p>
            <span>
              <b>Birthday: </b>
              {birthday}
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
          </p>
        </div>
      </div>
    );
  }
}

export default Member;
