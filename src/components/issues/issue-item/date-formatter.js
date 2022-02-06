import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

const formatDate = (date) => dayjs(date).fromNow();

export default formatDate;