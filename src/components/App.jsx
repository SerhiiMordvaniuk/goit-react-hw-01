import Profile from './Profile'
import FriendList from './FriendList'
import './App.css'
import './Profile.module.css'
import friends from "../friends.json"
import userData from "../userData.json"



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
    </>
  );
}
export default App
 

 
