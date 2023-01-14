import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from 'components/Transactions/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import css from './App.module.css';

export default function App() {
  return (
    <>
      <div className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className={css.container}>
        {<Statistics title="Upload stats" stats={data} />}
        {<Statistics stats={data} />}
      </div>

      <div className={css.container}>
        <FriendList friends={friends} />
      </div>

      <div className={css.container}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
