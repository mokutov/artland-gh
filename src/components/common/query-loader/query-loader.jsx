import style from './query-loader.module.scss';

const QueryLoader = ({loading, error, children}) => {
    if (loading) return <QueryLoading className={style.loading}>Loading (⌒_⌒;)</QueryLoading>
    if (error) return <QueryError error={error}/>
    return children;
}

export const QueryLoading = ({children}) => <div className={style.loading}>{children}</div>

export const QueryError = ({error}) => (
    <div className={style.error}>
        <h3>(╯°□°）╯︵ ┻━┻</h3>
        <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
)

export default QueryLoader;