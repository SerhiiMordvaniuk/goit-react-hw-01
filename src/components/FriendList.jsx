
function FriendList({friends}) {
   
    return (
        <>
            <ul className="friend-list">
                {friends.map((friend) => {
                    return <li key={friend.id} className="friend-list-item">
                                <div>
                                    <img src={friend.avatar} alt={friend.name} width="48" />
                                    <p>{friend.name}</p>
                                    {friend.isOnline && (<p style={{ color: "green" }}>Online</p>)}
                                    {!friend.isOnline && (<p style={{color:"red"}}>Offline</p>)}
                                </div>
                            </li>
                })}
            </ul>
        </>
    )
}

export default FriendList

 