import RepositoryStats from "@/components/repositories/repository-stats/repository-stats";

import style from './repository-item.module.scss';

const RepositoryItem = ({repository, onClick}) => {
    const {name} = repository;
    return (
        <div
            onClick={() => onClick(repository)}
            onKeyPress={(e) => {
                e.preventDefault();
                if (e.key === 'Enter') onClick(repository);
            }}
            tabIndex={0}
            className={style.item}>
            <div>{name}</div>
            <RepositoryStats repository={repository} />
    </div>
    )
}

export default RepositoryItem;