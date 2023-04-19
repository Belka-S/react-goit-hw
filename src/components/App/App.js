import { Component } from 'react';
// import { Container } from 'components/Layout/Layout.styled';
import { Section } from 'components/Section/Section';

import { Profile } from '../Profile/Profile';
import user from 'data/users.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'data/data.json';

import { FriendsList } from 'components/Friends/FriendsList';
import friends from 'data/friends.json';

import { Transactions } from 'components/Transactions/Transactions';
import initialTransactions from 'data/transactions.json';

import { TransactionForm } from 'components/Transactions/TransactionForm';

export class App extends Component {
  state = {
    transactions: initialTransactions,
  };

  addTransaction = newTransaction =>
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
    }));

  deleteTransaction = transactionId =>
    this.setState(prevState => ({
      transactions: prevState.transactions.filter(
        tratsaction => tratsaction.id !== transactionId
      ),
    }));

  render = () => (
    <>
      <h1 style={{ marginLeft: '60px' }}>react-hw-01-components</h1>

      <Section title={'1 - Social Network Profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={'2 - Statistics Section'}>
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section title={'3 - Friends List'}>
        <FriendsList items={friends} />
      </Section>

      <Section title={'4 - Transaction History'}>
        <TransactionForm onSubmit={this.addTransaction} />
        <Transactions
          items={this.state.transactions}
          onDelete={this.deleteTransaction}
        />
      </Section>
    </>
  );
}
