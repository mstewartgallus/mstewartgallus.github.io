import {
    list as listClass,
    item as itemClass,
} from "./comment-list.module.css";

export const CommentList = ({children}) => {
    return <div className={listClass}>{children}</div>;
}

export const CommentItem = ({children}) => {
    return <div className={itemClass}>{children}</div>;
}
