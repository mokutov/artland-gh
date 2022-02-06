import NoResults from "@/components/common/no-results/no-results";
import RepositoryItem from "@/components/repositories/repository-item/repository-item";

const RepositoryList = ({onSelect, repositories}) => repositories?.length === 0
    ? <NoResults>Ooops, no repositories found ʕ； •`ᴥ•´ʔ</NoResults>
    : repositories.map(repository =>
        <RepositoryItem
            onClick={onSelect}
            repository={repository}
            key={repository.id}
        />
    )

export default RepositoryList;