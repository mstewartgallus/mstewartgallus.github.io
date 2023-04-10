import { useMemo, useState, useCallback } from "react";
import { A } from "@features/ui";
import {
    iframe as iframeClass,
    loaded as loadedClass,
    unloaded as unloadedClass,
    comment as commentClass,
    header as headerClass
} from "./comment.module.css";

const Account = ({url, display_name, acct}) => {
    const name = display_name !== '' ? display_name : acct;
    return <address><A rel="nofollow" href={url}>{name}</A></address>;
};

const render = content =>
      `<!DOCTYPE html>
<html>
  <head>
    <base target="_parent">
    <meta name="color-scheme" content="dark light">
    <link rel="stylesheet" href="/sandbox.css">
  </head>
  <body>${content}</body>
</html>`;

const useRender = content =>
      useMemo(() => render(content), [content]);

const Comment = ({url, account, content, children}) => {
    const srcdoc = useRender(content);

    const [loaded, setLoaded] = useState(false);
    const onLoad = useCallback(event => {
        setLoaded(true);
    }, []);

    const loadClass = loaded ? loadedClass : unloadedClass;

    return <article className={commentClass}>
               <header className={headerClass}>
                   <Account {...account} />
                   <A rel="nofollow" href={url}>#</A>
               </header>
                <iframe className={iframeClass + ' ' + loadClass}
                        allow=""
                        sandbox="allow-top-navigation-by-user-activation"
                        srcDoc={srcdoc}
                        onLoad={onLoad}
                />
               <div>
                   {children}
               </div>
           </article>;
};

export default Comment;
