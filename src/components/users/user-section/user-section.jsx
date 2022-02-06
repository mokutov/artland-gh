import {useQuery} from "@apollo/client";
import {useApp} from "@/services/context";

import UserList from "@/components/users/user-list/user-list";
import QueryLoader from "@/components/common/query-loader/query-loader";

import SEARCH_USER_QUERY from "../../../services/queries/searchUserQuery";

const UserSection = () => {
    const {query, selectUser, selectedUserLogin} = useApp();
    const {loading, error, data} = useQuery(SEARCH_USER_QUERY,
        {
            variables:
                {query}
        }
    );

    return (
        <section>
            <h1>Users</h1>
            <QueryLoader loading={loading} error={error}>
                <UserList selectedUserLogin={selectedUserLogin} onSelect={selectUser} users={data?.search?.nodes}/>
            </QueryLoader>
        </section>
    )
}

export default UserSection;