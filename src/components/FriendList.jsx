
function FriendList({friends}) {
   
    return (
        <>
            <ul className="friend-list">
                {friends.map((friend) => {
                    return <li key={friend.id} className="friend-list-item">
                                <div>
                                    <img src={friend.avatar} alt={friend.name} width="48" />
                                    <p>{friend.name}</p>
                                    <p>{ friend.isOnline ? `Online` : `Offline` }</p>
                                </div>
                            </li>
                })}
            </ul>
        </>
    )
}

export default FriendList

 