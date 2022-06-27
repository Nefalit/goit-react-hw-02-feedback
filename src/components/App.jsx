import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  totalVotes = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  percentOfGood = () => {
    const { good } = this.state;
    const total = this.totalVotes();
    const positiveFeedback = Math.round((good / total) * 100);
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveVoice={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.totalVotes() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalVotes()}
              percentOfGood={this.percentOfGood()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
