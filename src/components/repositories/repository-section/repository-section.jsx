import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";

import {useApp} from "@/services/context";

import QueryLoader from "@/components/common/query-loader/query-loader";
import Button from "@/components/common/button/button";
import RepositoryList from "@/components/repositories/repository-list/repository-list";
import NaiveNextPrev from "@/components/repositories/pagination/naive-next-prev/naive-next-prev";
import NaiveAllCursors from "@/components/repositories/pagination/naive-all-cursors/naive-all-cursors";

import GET_USER_REPOSITORIES_QUERY from "@/services/queries/getUserRepositoriesQuery";

import style from './repository-section.module.scss';

const RepositorySection = () => {

    const [cursor, setCursor] = useState(null);
    const [paginationType, setPaginationType] = useState(true);

    const {selectedUserLogin, selectRepository} = useApp();

    const isPrevNextPagination = paginationType;
    const isRandomPageAccessPagination = !paginationType;

    const {loading, error, data} = useQuery(GET_USER_REPOSITORIES_QUERY, {
        variables: {
            login: selectedUserLogin, after: cursor
        }
    });

    useEffect(() => {
        setCursor(null);
    }, [selectedUserLogin, paginationType])

    return (
        <section>
            <h1>Repositories</h1>

            <QueryLoader loading={loading} error={error}>
                <RepositoryList onSelect={selectRepository} repositories={data?.user?.repositories?.nodes}/>
            </QueryLoader>

            {isPrevNextPagination && <NaiveNextPrev
                pageInfo={data?.user?.repositories?.pageInfo}
                onPageChange={setCursor}
                currentPage={cursor}
            />}

            {isRandomPageAccessPagination && <NaiveAllCursors
                pageSize={5}
                onPageChange={setCursor}
                currentPage={cursor}
            />}

            <div className={style.buttons}>
                <div><Button disabled={isPrevNextPagination} size="small" onClick={() => setPaginationType(true)}>
                    prev and next pagination
                </Button>
                    <Button disabled={isRandomPageAccessPagination} size="small"
                            onClick={() => setPaginationType(false)}>
                        pages numbers pagination
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default RepositorySection;