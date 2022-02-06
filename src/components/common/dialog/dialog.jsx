import style from './dialog.module.scss';

const Dialog = ({children}) => (
    <div className={style.backdrop}>
        <div className={style.dialog}>
            <div className={style.content}>{children}</div>
        </div>
    </div>
)

export default Dialog;
