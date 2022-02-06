import {forwardRef} from "react";
import style from './input.module.scss';

const Input = forwardRef((props, ref) => <input ref={ref} className={style.input} {...props} />);

export default Input;