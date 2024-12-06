
import css from "./FriendList.module.css"
import clsx from "clsx";

function FriendList({friends}) {
   
    return (
        <>
            <ul className={css.list}>
                {friends.map((friend) => {
                    return <li key={friend.id} className={css.item}>
                                <div>
                                    <img src={friend.avatar} alt={friend.name} width="48" />
                                    <p>{friend.name}</p>
                                    <p className={clsx( friend.isOnline ? css.green : css.red)}>{friend.isOnline ? `Online` : `Offline` }</p>
                                </div>
                            </li>
                })}
            </ul>
        </>
    )
}

export default FriendList
