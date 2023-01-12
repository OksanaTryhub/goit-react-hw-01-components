import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
// import FriendList from 'components/friendList/FriendList';
// import TransactionHistory from 'components/transactions/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
// import friends from './data/friends.json';
// import transctions from './data/transactions.json';

import './App.css';

export default function App() {
  return (
    <>
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className="container">
        {<Statistics title="Upload stats" stats={data} />}
        {<Statistics stats={data} />}
      </div>
    </>

    //  <Statistics title="Upload stats" stats={data.label, data.percentage} />
    //   <Statistics stats={data} />

    // <FriendList friends={friends} />;

    // <TransactionHistory items={transactions} />
  );
}
