import UserSection from "@/components/users/user-section/user-section";
import RepositorySection from "@/components/repositories/repository-section/repository-section";

import style from './main-page.module.scss';
import {useApp} from "@/services/context";
import UserSearchForm from "@/components/users/user-search-form/user-search-form";
import IssueSection from "@/components/issues/issue-section/issue-section";

const MainPage = () => {
    const {updateSearchQuery, selectedUserLogin, selectedRepository} = useApp();
    return (<div className={style.page}>
            <UserSearchForm onSubmit={updateSearchQuery}/>
            <div className={style.content}>
                {!selectedRepository ? <>
                    <UserSection/>
                    {selectedUserLogin && <RepositorySection/>}
                </> : <IssueSection/>}
            </div>
        </div>)
}

export default MainPage;