import {useState} from "react";
import {useQuery} from "@apollo/client";
import {useApp} from "@/services/context";

import QueryLoader from "@/components/common/query-loader/query-loader";
import RepositoryStats from "@/components/repositories/repository-stats/repository-stats";
import Button from "@/components/common/button/button";
import IssueList from "@/components/issues/issue-list/issue-list";
import CreateIssueForm from "@/components/issues/create-issue-form/create-issue-form";
import Dialog from "@/components/common/dialog/dialog";

import GET_REPOSITORY_ISSUES_QUERY from "@/services/queries/getRepositoryIssuesQuery";

import style from './issue-section.module.scss';

const IssueSection = () => {
    const {selectedUserLogin, selectedRepository, selectRepository} = useApp();
    const [isNewIssueFormOpen, setNewIssueFormOpen] = useState(false);
    const {loading, error, data} = useQuery(GET_REPOSITORY_ISSUES_QUERY, {
        variables: {
            name: selectedRepository?.name, owner: selectedUserLogin
        }
    });

    return (
        <section>
            <div className={style.header}>
                <h1>{selectedRepository?.name} repository</h1>
                <RepositoryStats repository={selectedRepository}/>
            </div>
            <div className={style.action}>
                <h1>Open Issues</h1>
                <div className={style.buttons}>
                    <Button onClick={() => selectRepository(null)}>← Go back</Button>
                    <Button onClick={() => setNewIssueFormOpen(true)}>+ New Issue</Button>
                </div>
            </div>
            <QueryLoader loading={loading} error={error}>
                <IssueList issues={data?.repository?.issues?.nodes}/>
            </QueryLoader>
            {isNewIssueFormOpen && <Dialog>
                <CreateIssueForm
                    onCancel={() => setNewIssueFormOpen(false)}
                    repository={selectedRepository}
                />
            </Dialog>}
        </section>
    )
}

export default IssueSection;