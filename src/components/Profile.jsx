
import '../components/Profile.module.css'

function Profile(props) {
    return (
        <>
            <div className='profile-container'>
                <div className='name-container'>
                    <img
                        src={props.image}
                        alt={props.name}
                        width="120"
                        className='profile-img'
                    />
                    <p className='profile-name'>{props.name}</p>
                    <p className='profile-info'>@{props.tag}</p>
                    <p className='profile-info'>{props.location}</p>
                </div>

                <ul className='profile-stats-list'>
                    <li className='profile-status-item'>
                        <span>Followers</span>
                        <span className='stats-bolt'>{props.stats.followers}</span>
                    </li>
                    <li className='profile-status-item'>
                        <span>Views</span>
                        <span className='stats-bolt'>{ props.stats.views}</span>
                    </li>
                    <li className='profile-status-item'> 
                        <span>Likes</span>
                        <span className='stats-bolt'>{ props.stats.likes}</span>
                    </li>
                    </ul>
            </div>

        </>
    )
}

export default Profile