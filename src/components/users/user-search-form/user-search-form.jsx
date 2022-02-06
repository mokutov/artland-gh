import {useRef} from "react";

import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";

import style from "./user-search-form.module.scss";

const UserSearchForm = ({onSubmit}) => {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputRef.current.value);
    }
    return (<div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
            <Input ref={inputRef}/>
            <Button type='submit'>Search</Button>
        </form>
    </div>)
}

export default UserSearchForm;