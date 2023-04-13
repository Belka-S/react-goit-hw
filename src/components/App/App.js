import { GlobalStyle } from './GlobalStyles';
import { Container } from 'components/Layout/Layout.styled';

import { Profile } from '../Profile/Profile';
import users from 'data/users.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'data/data.json';

import { FriendsList } from 'components/Friends/FriendsList';
import friends from 'data/friends.json';

import { Transactions } from 'components/Transactions/Transactions';
import transactions from 'data/transactions.json';

export const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <h1>react-hw-01-components</h1>

      <h2>1 - Social Network Profile</h2>
      <Profile user={users} />

      <h2>2 - Statistics Section</h2>
      <Statistics title="Upload stats" stats={data} />

      <h2>3 - Friends List</h2>
      <FriendsList items={friends} />

      <h2>4 - Transaction History</h2>
      <Transactions items={transactions} />
    </Container>
  </>
);
