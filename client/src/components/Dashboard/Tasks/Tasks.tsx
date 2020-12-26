import React from 'react';
import './Tasks.scss';

import Task from './Task/Task';

class Tasks extends React.Component {
  render() {
    // TODO: make tasks dynamic
    const tasks = [
      {
        name: 'Complete your profile ',
        deadline: '(within 1 day)',
        description:
          'On the top-right corner, you will find your name and profile picture: click there to go to your profile. Once you’re there, go to the “Settings” section and complete your profile to get started!',
      },
      {
        name: 'Say hi to your buddy ',
        deadline: '(within 1 day)',
        description:
          'On the right side, you will find the name of a fellow team member under the “Buddy” category.  That person has been assigned to you to help you integrate into the company: you can ask them for help at any time during your onboarding process, and they will be right there to help you. Start by presenting yourself to them!',
      },
      {
        name: 'Get to know your new company ',
        deadline: '(within 2 days)',
        description:
          'In the “Company & Team” section, you will find your team members and some information about your company, such as roles and responsibilities, and achievements. Take some time to explore this section and don’t hesitate to ask for more information to your buddy!',
      },
      {
        name: 'Read documents ',
        deadline: '(within 4 days)',
        description:
          'In the “Documents” section, you will find files under some categories. Take your time to go through them and, when you’re done reading a file, check the corresponding “Read” box. Have fun learning!',
      },
      { name: 'Complete your first assignment ', deadline: '(within 5 days)', description: 'A task' },
    ];

    return (
      <div id="dashboard__tasks">
        {tasks.map((task, i) => {
          return <Task name={task.name} deadline={task.deadline} description={task.description} taskNum={i + 1} key={i} />;
        })}
      </div>
    );
  }
}

export default Tasks;
