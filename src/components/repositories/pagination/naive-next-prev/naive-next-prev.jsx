import Button from "@/components/common/button/button";
import {useState} from "react";

import style from './naive-next-prev.module.scss';

const NaiveNextPrev = ({onPageChange, currentPage, pageInfo}) => {

    const [cursors, setCursors] = useState([]);

    if (!pageInfo) return null;

    const {endCursor, hasNextPage, hasPreviousPage} = pageInfo;
    if (!hasNextPage && !hasPreviousPage) return null;

    const handleNext = () => {
        setCursors((prevCursors) => [...prevCursors, endCursor]);
        onPageChange(endCursor);
    };

    const handlePrev = () => {
        const lastCursors = [...cursors];
        let lastCursor = lastCursors.pop();
        if (lastCursor === currentPage) {
            lastCursor = lastCursors.pop();
        }
        setCursors([...lastCursors]);
        onPageChange(lastCursor);
    }

    return (<div className={style.pagination}>
        <div className={style.buttons}>
            <Button onClick={handlePrev} disabled={!hasPreviousPage}>← Prev</Button>
            <Button onClick={handleNext} disabled={!hasNextPage}>Next →</Button>
        </div>
    </div>)
}

export default NaiveNextPrev;
