import {useState} from "react";
import {useMutation} from "@apollo/client";

import Input from "@/components/common/input/input";
import Button from "@/components/common/button/button";
import Textarea from "@/components/common/textarea/textarea";
import {QueryError} from "@/components/common/query-loader/query-loader";

import CREATE_ISSUE_MUTATION from "@/services/mutations/createIssueMutation";

import style from './create-issue-form.module.scss';
// GitHub issue limits
const TITLE_LIMIT = 256;

const CreateIssueForm = ({repository, onCancel}) => {
    const {id, name} = repository;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [createIssue, {loading, error, data}] = useMutation(CREATE_ISSUE_MUTATION);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await createIssue({
                variables:
                    {id, title, body}
            });
        } catch (e) {
            // nah, actually we don't care about it :(
            // but since useMutation throws this error in addition to {error} we have to catch it
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        onCancel();
    }

    const handleTitle = (e) => {
        const {value} = e.target;
        if (value.length <= 256) setTitle(e.target.value);
    }
    if (loading) return <>
        <p>Creating new issue <i>{title}</i></p>
        <p>for repository <strong>{name}</strong></p>
    </>
    if (error) return <>
        <QueryError error={error}/>
        <div className={style.actions}>
            <Button onClick={handleCancel}>Okay :(</Button>
        </div>
    </>
    if (data) return <>
        <p>Huge success! We created issue for you, have a good day!</p>
        <div className={style.actions}>
            <Button onClick={handleCancel}>Okay :)</Button>
        </div>
    </>
    return (<>
        <h1>New issue for <i>{name}</i></h1>
        <form className={style.form} onSubmit={onSubmit}>
            <Input value={title}
                   onChange={handleTitle}
                   required
                   placeholder="Title"/>
            {(title.length > TITLE_LIMIT - 32) && <div className={style.limit}>{title.length} / {TITLE_LIMIT}</div>}
            <Textarea value={body}
                      onChange={(e) => setBody(e.target.value)} required
                      placeholder="Description"/>
            <div className={style.actions}>
                <Button onClick={handleCancel} theme="outline">Cancel</Button>
                <Button type="submit">Create</Button>
            </div>
        </form>
    </>)
};

export default CreateIssueForm;