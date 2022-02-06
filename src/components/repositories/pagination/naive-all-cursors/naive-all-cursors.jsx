import {useEffect, useState} from "react";
import {useLazyQuery} from "@apollo/client";
import {useApp} from "@/services/context";

import Button from "@/components/common/button/button";
import {QueryLoading} from "@/components/common/query-loader/query-loader";

import GET_USER_REPOSITORIES_PAGES_CURSORS_QUERY from "@/services/queries/getUserRepositoriesPagesQuery";

import style from "./naive-all-cursors.module.scss";

const NaiveAllCursors = ({onPageChange, pageSize, currentPage}) => {

    const {selectedUserLogin} = useApp();
    const [ready, setReady] = useState(false);
    const [cursors, setCursors] = useState([]);
    const [pages, setPages] = useState([]);

    const [load] = useLazyQuery(GET_USER_REPOSITORIES_PAGES_CURSORS_QUERY);

    useEffect(() => {
        setReady(false);
        setCursors([]);
        (async function f(after, prevCursors = []) {
            const {data, error} = await load({variables: {login: selectedUserLogin, after}});
            const {pageInfo: {hasNextPage, endCursor}, edges} = data?.user?.repositories;
            const allCursors = [...prevCursors, ...edges.map(({cursor}) => cursor)];
            if (hasNextPage && !error) {
                f(endCursor, allCursors);
            } else {
                setReady(true);
                setCursors(allCursors);
            }
        })()
    }, [selectedUserLogin]);

    useEffect(() => {
        const newPages = [...cursors.filter((v, i) => i % pageSize === pageSize - 1)];
        if(newPages[newPages.length - 1] === cursors[cursors.length -1]) newPages.pop();
        setPages(newPages);
    }, [pageSize, cursors])

    if (!ready) return <QueryLoading>Fetching pages :(</QueryLoading>;
    if (cursors.length < pageSize) return null;

    const lastPage = pages[pages.length - 1];
    const hasNoPrev = currentPage === null;
    const hasNoNext = currentPage === lastPage;
    const nextPage = pages[pages.indexOf(currentPage) + 1];
    const prevPage = pages.indexOf(currentPage) === 0 ? null : pages[pages.indexOf(currentPage) - 1];

    return (<div className={style.pagination}>
            <div className={style.buttons}>
                <Button disabled={hasNoPrev} onClick={() => onPageChange(null)}>←←</Button>
                <Button disabled={hasNoPrev} onClick={() => onPageChange(prevPage)}>←</Button>
                <Button disabled={hasNoPrev} onClick={() => onPageChange(null)}>1</Button>
                {pages.map((v, i) => <Button disabled={v === currentPage} key={v} onClick={() => onPageChange(v)}>{i + 2}</Button>)}
                <Button disabled={hasNoNext} onClick={() => onPageChange(nextPage)}>→</Button>
                <Button disabled={hasNoNext} onClick={() => onPageChange(lastPage)}>→→</Button>
            </div>
        </div>

    )
}

export default NaiveAllCursors;