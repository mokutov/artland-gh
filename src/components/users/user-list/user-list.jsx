import UserItem from "../user-item/user-item";
import NoResults from "@/components/common/no-results/no-results";

import style from "./user-list.module.scss";

const UserList = ({users, selectedUserLogin, onSelect}) => (<div className={style.list}>
    {users?.length === 0
        ? <NoResults>Ooops, no users found ʕ； •`ᴥ•´ʔ</NoResults>
        // since currently I have no idea how to filter "organization" lets load more search results and show 5 first
        // it will help to create illusion of the "good" search
        : users.filter(({id}) => !!id).slice(0, 5).map(user =>
            <UserItem
                isSelected={user.login === selectedUserLogin}
                onClick={onSelect}
                key={user.login}
                user={user}
            />
        )}
</div>)

export default UserList;