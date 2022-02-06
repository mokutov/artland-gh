import {forwardRef} from "react";
import style from './textarea.module.scss';

const Textarea = forwardRef((props, ref) => <textarea ref={ref} className={style.textarea} {...props} />);

export default Textarea;