import style from './button.module.scss';

const Button = (props) => <button className={style.button} {...props}>{props.children}</button>

export default Button;