import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import HelpIcon from '@material-ui/icons/Help';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const styles = {
  paper: {
    padding: '10px 16px',
    backgroundColor: '#022F40',
    color: '#FFFFFF',
    width: 'auto',
  },
  title: { fontFamily: 'Poppins, sans-serif', fontSize: '16px' },
  description: { fontFamily: 'Poppins, sans-serif', fontSize: '14px' },
  item: { backgroundColor: '#F9AB55', color: '#011117' },
  lastItem: { backgroundColor: '#FBCD99', color: '#011117' },
  timelineItem: { minHeight: '100px' },
  date: { fontFamily: 'Poppins, sans-serif', fontSize: '14px', marginTop: '5px' },
};

interface AchievementsProps {
  classes: any;
}

class Achievements extends React.Component<AchievementsProps> {
  // TODO: Display achievements from DB
  achievements = [
    { title: 'NewCompany was founded', description: 'With only 2 members!', date: 'March 2018' },
    { title: 'First office', description: 'Finally settling down!', date: 'August 2018' },
  ];

  render() {
    return (
      <div id="company-and-team__achievements__container">
        <Timeline align="alternate">
          {this.achievements.map((achievement, i) => {
            return i % 2 == 0 ? (
              <TimelineItem key={i} className={this.props.classes.timelineItem}>
                <TimelineOppositeContent>
                  <Typography className={this.props.classes.date}>{achievement.date}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={this.props.classes.item}>
                    <StarIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper className={this.props.classes.paper}>
                    <Box
                      fontWeight="fontWeightBold"
                      display="flex"
                      justifyContent="flex-start"
                      className={this.props.classes.title}
                    >
                      {achievement.title}
                    </Box>

                    <Typography className={this.props.classes.description}>{achievement.description}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ) : (
              <TimelineItem key={i} className={this.props.classes.timelineItem}>
                <TimelineContent>
                  <Typography align={'left'} className={this.props.classes.date}>
                    {achievement.date}
                  </Typography>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot className={this.props.classes.item}>
                    <StarIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineOppositeContent>
                  <Paper className={this.props.classes.paper}>
                    <Box
                      fontWeight="fontWeightBold"
                      display="flex"
                      justifyContent="flex-end"
                      className={this.props.classes.title}
                    >
                      {achievement.title}
                    </Box>

                    <Typography align={'right'} className={this.props.classes.description}>
                      {achievement.description}
                    </Typography>
                  </Paper>
                </TimelineOppositeContent>
              </TimelineItem>
            );
          })}
          <TimelineItem className={this.props.classes.timelineItem}>
            <TimelineContent></TimelineContent>
            <TimelineSeparator>
              <TimelineDot className={this.props.classes.lastItem}>
                <HelpIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineOppositeContent></TimelineOppositeContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default withStyles(styles)(Achievements);
