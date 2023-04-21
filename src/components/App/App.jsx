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

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => (acc += el));

  countPositiveFeedbackPstg = () => this.state.good / this.countTotalFeedback();

  render = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePstg = this.countPositiveFeedbackPstg();

    return (
      <>
        <Section title="Please leave feedback">
          <Options
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePstg={positivePstg}
            />
          )}
        </Section>
      </>
    );
  };
}

/* {(() => {
  if (!totalFeedback)
    return <Notification message="There is no feedback" />;
  else
    return (
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePstg={this.countPositiveFeedbackPstg()}
      />
    );
})()} */
