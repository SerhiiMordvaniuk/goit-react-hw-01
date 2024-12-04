import Profile from './Profile'
import './App.css'
import './Profile.module.css'
import userData from "../userData.json"
import FriendList from './FriendList'

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
      <FriendList /> 
    </>
  );
}
export default App

