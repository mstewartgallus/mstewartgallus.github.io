import { useId, useState, useCallback, useContext, useMemo, createContext } from 'react';
import { title,
         itemContent, itemContentInner,
         items, item, skip } from "./ten.module.css";

const ids = ['foo', 'bar', 'gar', 'dar'];
const archived = ['foo', 'bar', 'gar', 'dar'];

const SelectionContext = createContext({ selection: -1, setSelection: () => {}});
const OpenContext = createContext({ open: false, setOpen: () => {}});

const Accordion = ({children}) => {
    const [selection, setSelection] = useState(null);
    return <ul>
               <SelectionContext.Provider value={{ selection, setSelection }}>
                   {children}
               </SelectionContext.Provider>
           </ul>;
};

const AccordionItem = ({children}) => {
    const id = useId();
    const { selection, setSelection } = useContext(SelectionContext);
    const setOpen = useCallback(open => {
        setSelection(open ? id : -1);
    }, [setSelection, id]);
    const open = useMemo(() => selection === id, [selection, id]);
    return <li>
               <OpenContext.Provider value={{ open, setOpen }}>
                   {children}
               </OpenContext.Provider>
           </li>;
};

const AccordionItemSummary = ({children}) => {
    const id = useId();
    const { open, setOpen } = useContext(OpenContext);
    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);
    return <div>
               <label for={id}>{children}</label>
               <button id={id} onClick={onClick}>
                   {
                       open ? <>Open</> : <>Closed</>
                   }
               </button>
           </div>;
};

const AccordionItemContent = ({children}) => {
    const { open } = useContext(OpenContext);
    return open ?
        <div className={itemContent}>
            <div className={itemContentInner}>
                {children}
            </div>
        </div> : <></>;
};

const EntryForm = () => {
    const id = useId();
    return <form action="#">
               <ul className={items}>
                   <li className={item}>
                       <fieldset>
                           <div>
                               <label for={id}>Edit</label>
                               <input id={id} type="text" />
                           </div>
                           <button>Submit</button>
                       </fieldset>
                   </li>
                   <li className={item}>
                       <fieldset>
                           <button>Archive</button>
                       </fieldset>
                   </li>
               </ul>
           </form>;
}

const Entry = ({id}) =>
<AccordionItem>
    <AccordionItemSummary>{id}</AccordionItemSummary>
    <AccordionItemContent>
        <EntryForm />
    </AccordionItemContent>
</AccordionItem>;


const Entries = () =>
<Accordion>{ids.map(id => <Entry key={id} id={id} />)}</Accordion>;

// FIXME make accordion?
const TenPage = () => {
    return <div>
               <section>
                   <h1>Ten</h1>
                   <Entries />
               </section>
               <section>
                   <h2>Archived</h2>
                   <ul>
                       {
                           archived.map(entry =>
                               <li key={entry}>{entry}</li>)
                       }
                   </ul>
               </section>;
           </div>;
};


export default TenPage;
