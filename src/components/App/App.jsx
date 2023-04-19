import { Component } from 'react';

import { Options } from 'components/Options/Options';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  countTotalFeedback = obj =>
    Object.values(obj).reduce((acc, el) => (acc += el));

  countPositiveFeedbackPstg = obj => obj.good / this.countTotalFeedback(obj);

  render = () => (
    <>
      <Section title="Please leave feedback">
        <Options options={this.state} onLeaveFeedback={this.addFeedback} />
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback(this.state) > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePstg={this.countPositiveFeedbackPstg(this.state)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
