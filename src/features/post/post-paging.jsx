import { Paging } from "./paging.jsx";

const paging = ({ category, previous, next }) => [category, {
    previous: previous?.post,
    next: next?.post
}];

const pagingOfLinks = childrenLink => new Map(childrenLink.map(paging));

export const PostPaging = ({childrenLink}) => {
    const p = pagingOfLinks(childrenLink);
    return <Paging {...p.get('')} />;
};
