import Profile from 'components/social-profile/Profile';
import Statistics from './statistics/Statistics';

import user from '../data/user.json';
import stats from '../data/statistic-data.json';

export default function App(){
  return (
    <div>

<Profile
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
/>

<Statistics
stats={stats} 
/>;

    </div>

)}
