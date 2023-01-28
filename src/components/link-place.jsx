import * as React from "react";
import { Link } from "gatsby";
import { search } from "../utils/search.js";

export const LinkPlace = ({place}) => {
    const to = search(['place', place]);
    return <Link to={to}
                 rel="tag"
                 data-pagefind-filter="place">{place}</Link>;
};

export default LinkPlace;
