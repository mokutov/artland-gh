import IssueItem from "@/components/issues/issue-item/issue-item";
import NoResults from "@/components/common/no-results/no-results";

const IssueList = ({issues}) => issues.length === 0
        ? <NoResults>Ooops, no open issues found ʕ； •`ᴥ•´ʔ</NoResults>
        : issues.map(issue => <IssueItem key={issue.id} issue={issue}/>)

export default IssueList;