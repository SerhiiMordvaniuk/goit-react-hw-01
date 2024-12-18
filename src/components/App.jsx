import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList'
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import './App.css'
import friends from "../friends.json"
import userData from "../userData.json"
import transactions from '../transactions.json'



function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />
    </>
  );
}
export default App