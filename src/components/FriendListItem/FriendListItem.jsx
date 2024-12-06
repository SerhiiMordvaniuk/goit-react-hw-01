import clsx from "clsx"
import css from './FriendListItem.module.css'
import { TbPointFilled } from "react-icons/tb";


function FriendListItem ({name, avatar, isOnline}){
    return (
        <div>
            <img src={avatar} alt={name} className={css.img}  />
            <p className={css.name}>{name}<TbPointFilled className={ clsx(isOnline? css.green : css.red)} /></p>
            <p className={clsx(isOnline? css.green  : css.red)}>{isOnline? `Online` : `Offline`}</p>
        </div>
    )
}

export default FriendListItem