import style from './user-item.module.scss'

const UserItem = ({isSelected, onClick, user: {avatarUrl, name, login}}) => (
    <div
        tabIndex={0}
        onKeyPress={(e) => {
            e.preventDefault();
            if (e.key === 'Enter') onClick(login);
        }}
        onClick={() => onClick(login)}
        className={`${style.item} ${isSelected ? style.selected : ''}`}
    >
        <div alt={`${name} avatar`} className={style.avatar} style={{backgroundImage: `url(${avatarUrl})`}}/>
        <div title={login} className={style.login}>{login}</div>
        {name && <div title={name} className={style.name}>{name}</div>}
    </div>
)

export default UserItem;