import formatDate from './date-formatter';
import style from './issue-item.module.scss';

const IssueItem = ({issue}) => {
    const {title, createdAt, author, body} = issue;
    const login = author?.login;
    const avatar = author?.avatarUrl;
    return (
        <div className={style.issue}>
            <div className={style.title}>
                <span>{title}</span>
                <small>{body}</small>
            </div>
            <div className={style.owner}>
                <span>
                {formatDate(createdAt)}
                    <br/>
                    by {login || 'unknown author'}
                </span>
                {avatar && <img alt={title} src={avatar}/>}
            </div>
        </div>
    )
}

export default IssueItem;