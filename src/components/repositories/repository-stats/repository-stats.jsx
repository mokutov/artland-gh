import style from "./repository-stats.module.scss";

const textForStars = (n) => {
    switch (n) {
        case 0:
            return `no stars`;
        case 1:
            return `${n} star`;
        default:
            return `${n} stars`;
    }
}

const textForWatchers = (n) => {
    switch (n) {
        case 0:
            return `nobody watching`;
        default:
            return `${n} watching`;
    }
}

const RepositoryStats = ({repository}) => {
    const {stargazerCount, watchers: {totalCount}} = repository;
    return (
        <div className={style.stats}>
            {textForStars(stargazerCount)} - {textForWatchers(totalCount)}
        </div>
    )
}

export default RepositoryStats;