// импорт компонентов
import Section from 'components/section/Section';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendsList from 'components/friends-list/FriendsList';
import TransactionHistory from 'components/transaction-history/TransactionHistory';


// импорт данных json
import user from './data/user.json';
import stats from './data/statistic-data.json';
import friends from './data/friends-list.json';
import transactions from './data/transactions.json';


// рендер в Арр всех компонентов
export default function App(){
  return (
    <div>

<Section title={"Task-1 Social Network Profile"}>
    <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
</Section>

<Section title={"Task-2 Statistics"}>
    <Statistics
    stats = {stats} 
    />
</Section>

<Section title={"Task-3 Friends List"}> 
    <FriendsList
    friends = {friends} 
    />
</Section>

<Section title={"Task-4 Transactions History"}>
    <TransactionHistory 
    transactions = {transactions} 
    />
</Section>

    </div>

)}
