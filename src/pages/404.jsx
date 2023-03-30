import { useCallback, useRef, useId, useEffect } from "react";
import { navigate } from "gatsby";
import {
    A,
    BreadcrumbList, BreadcrumbItem,
    Button,
    H1,
    P,
    Page,
    Viewport
} from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import { dialog } from "./404.module.css";

const title = "Page Not Found";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <Title>{title}</Title>
               <SeoBasic title={title} url={url} />
           </>;
};

const NotFoundPage = () => {
    const ref = useRef();
    const id = useId();
    useEffect(() => {
        const { current: dialog } = ref;
        if (!dialog) {
            return;
        }
        dialog.showModal();
        return () => {
            dialog.close();
        };
    }, [ref]);
    const onSubmit = useCallback(() => navigate(-1), []);
    return <Viewport>
               <dialog className={dialog} role="alertdialog" ref={ref} aria-labelledby={id}>
                   <Page
                       heading={<H1 id={id}>Page Not Found</H1>}
                   >
                       <P>Sorry the page you requested could not be found.</P>

                       <form method="dialog" onSubmit={onSubmit}>
                           <Button autoFocus="autofocus">Back to whence ye came</Button>
                       </form>
                   </Page>
               </dialog>
           </Viewport>;
};

export default NotFoundPage;
