import * as React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";
import { banner } from "./banner.module.css";

const Banner = () => {
    const id = React.useId();
    const { title, description } = useSiteMetadata();

    return <header className={banner} aria-describedby={id}>
          <hgroup>
            <h2 id={id}>{title}</h2>
            <p>{description}</p>
          </hgroup>

          <ul>
            <li><Link type="application/atom+xml" rel="alternate" to="/feed.xml">Subscribe</Link></li>
            <li><Link to="/about">About the Author</Link></li>
          </ul>
        </header>;
};

export default Banner;
