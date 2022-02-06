import style from "./no-results.module.scss";

const NoResults = ({children}) => (
    <div className={style.message}>
        {children || "Oooops, I didn't find anything ʕ； •`ᴥ•´ʔ"}
    </div>
)

export default NoResults;