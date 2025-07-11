import { EditList, EditItem } from "@features/ten";
import { useReducer,
         useId, useState, useCallback, useContext, useMemo, createContext } from 'react';
import {
    editForm, editFormWrapper, editInput, editMenu,
    button, entryList, entryItem, entry, title
} from "./ten.module.css";

const iff = (cond, value) => cond ? value : undefined;

const If = ({ children, cond }) => cond ? children : undefined;

const Input = ({ value, onChange }) => {
    const [editValue, setEditValue] = useState(value);

    const onChangeCb = useCallback(e => {
        e.preventDefault();
        const { value } = e.target;
        setEditValue(value);
        onChange(value);
    }, [onChange]);

    return <input className={editInput}
                  required="required"
                  onChange={onChangeCb}
                  value={editValue ?? ''} />;
};

const EntryForm = ({
    value, onChange,
    open,
    onArchive, onUp, onDown,
    controlId, buttonId
}) => {
    const [editValue, setEditValue] = useState(value ?? '');

    const onChangeEdit = useCallback(v => setEditValue(v), []);

    const onSubmit = useCallback(e => {
        const value = e.nativeEvent.submitter.value;
        switch (value) {
        case 'edit':
        case 'archive':
        case 'up':
        case 'down':
            e.preventDefault();
            onChange(editValue);
            break;
        }

        switch (value) {
        case 'archive':
            onArchive();
            break;

        case 'up':
            onUp();
            break;

        case 'down':
            onDown();
            break;

        default:
            return;
        }
    },[onChange, editValue, onArchive, onUp, onDown]);

    return <div className={editForm}>
               <div className={entry}>
                   <label className={title} htmlFor={buttonId}>{value ?? '...'}</label>
                   <If cond={open}>
                       <form id={controlId} action="#" onSubmit={onSubmit}>
                           <Input value={value} onChange={onChangeEdit} />
                       </form>
                   </If>
               </div>
               <div className={entry}>
                   <If cond={open}>
                       <div className={editMenu}>
                           <EditList>
                               <EditItem>
                                   <button form={controlId} value="edit">Edit</button>
                               </EditItem>
                               <EditItem>
                                   <button form={controlId} disabled={!onArchive} value="archive">
                                       Archive
                                   </button>
                               </EditItem>
                               <EditItem>
                                   <button form={controlId} disabled={!onUp} value="up">
                                       Up
                                   </button>
                               </EditItem>
                               <EditItem>
                                   <button form={controlId} disabled={!onDown} value="down">
                                       Down
                                   </button>
                               </EditItem>
                           </EditList>
                       </div>
                   </If>
               </div>
           </div>;
};

const Entry = ({
    value, onChange,
    open, onToggle,
    onArchive, onUp, onDown
}) => {
    const controlId = useId();
    const buttonId = useId();

    const onToggleClick = useCallback(e => {
        e.preventDefault();

        onToggle();
    }, [onToggle]);
    return <div className={editFormWrapper}>
               <div className={button}>
                   <button
                       id={buttonId}
                       onClick={onToggleClick}
                       aria-expanded={open}
                       aria-controls={controlId}
                   >
                       {open ? <>+</> : <>-</>}
                   </button>
               </div>

               <EntryForm
                   controlId={controlId} buttonId={buttonId}
                   open={open} value={value}
                   onChange={onChange}
                   onArchive={onArchive} onUp={onUp} onDown={onDown}
               />
           </div>;
};

const EntryContext = createContext({
    selection: -1,
    state: null,
    onToggle: () => {},
    onEdit: () => {},
    onArchive: () => {},
    onUp: () => {},
    onDown: () => {},
});
EntryContext.displayName = 'EntryContext';

const EntryItem = ({index}) => {
    const {
        selection, state, onEdit, onArchive, onUp, onDown, onToggle
    } = useContext(EntryContext);

    const onToggleEntry = useCallback(() => onToggle(index),
                                      [index, onToggle]);
    const onEditEntry = useCallback(edit =>
        onEdit(index, edit),
        [index, onEdit]);
    const onArchiveEntry = useCallback(() =>
        onArchive(index),
        [index, onArchive]);
    const onDownEntry = useCallback(() =>
        onDown(index),
        [index, onDown]);
    const onUpEntry = useCallback(() =>
        onUp(index),
        [index, onUp]);

    const { entries, fresh } = state;
    const open = selection === index;
    const id = fresh[index];
    const value = entries[id];

    return <li className={entryItem}>
               <Entry
                   value={value} onChange={onEditEntry}
                   open={open}
                   onToggle={onToggleEntry}
                   onArchive={onArchiveEntry}
                   onUp={iff(index > 0, onUpEntry)}
                   onDown={iff(index < len, onDownEntry)}
               />
           </li>;
};

const EntryList = ({
    children,
    state, onEdit, onArchive, onDown, onUp
}) => {
    const [selection, onSelect] = useState(-1);

    const onToggleEntry = useCallback(index => {
        onSelect(selection => selection === index ? -1 : index);
    }, [onSelect]);

    const onEditEntry = useCallback((index, edit) => {
        onEdit(index, edit);
        onSelect(-1);
    }, [onEdit, onSelect]);
    const onArchiveEntry = useCallback(index => {
        onArchive(index);
        onSelect(-1);
    }, [onArchive, onSelect]);
    const onUpEntry = useCallback(index => {
        onUp(index);
        onSelect(-1);
    }, [onUp, onSelect]);
    const onDownEntry = useCallback(index => {
        onDown(index);
        onSelect(-1);
    }, [onDown, onSelect]);
    const handler = useMemo(() => ({
        selection, state,
        onToggle: onToggleEntry,
        onEdit: onEditEntry,
        onArchive: onArchiveEntry,
        onUp: onUpEntry,
        onDown: onDownEntry
    }), [
        selection,
        state,
        onToggleEntry,
        onEditEntry,
        onArchiveEntry,
        onDownEntry,
        onUpEntry
    ]);
    return <ul className={entryList}>
               <EntryContext.Provider value={handler}>
                   {children}
               </EntryContext.Provider>
           </ul>;
};


// FIXME add ids to identify entries
const len = 10;

const reducer = (state, action) => {
    switch (action.type) {
    case 'edit': {
        const { index, value } = action;
        const id = state.fresh[index];
        const entries = [...state.entries];
        entries[id] = value;
        return { ...state, entries, selection: -1 };
    }

    case 'archive': {
        const { index } = action;
        const id = state.fresh[index];
        const fresh = [...state.fresh];
        const entries = [...state.entries, null];
        fresh[index] = entries.length - 1;
        const archived = [id, ...state.archived];
        return { ...state, fresh, archived, entries, selection: -1 };
    }

    case 'up': {
        const { index } = action;
        const fresh = [...state.fresh];
        const nextIndex = (len + index - 1) % len;
        const value = fresh[index];
        fresh[index] = fresh[nextIndex];
        fresh[nextIndex] = value;
        return { ...state, fresh, selection: -1 };
    }

    case 'down': {
        const { index } = action;
        const fresh = [...state.fresh];
        const nextIndex = (index + 1) % len;
        const value = fresh[index];
        fresh[index] = fresh[nextIndex];
        fresh[nextIndex] = value;
        return { ...state, fresh, selection: -1 };
    }

    case 'select': {
        const { index } = action;
        return { ...state, selection: index };
    }

    default:
        throw Error('unknown action: ' + action);
   }
};

// FIXME add unarchive function?
const TenPage = () => {
    const [state, dispatch] = useReducer(reducer, null, () => {
        const entries = Array(len).fill(null);
        const fresh = entries.map((v, ix) => ix);
        return {
            entries,
            fresh,
            archived: []
        };
    });

    const onEdit = useCallback((index, value) =>
        dispatch({ type: 'edit', index, value }),
        []);
    const onArchive = useCallback((index, value) =>
        dispatch({ type: 'archive', index, value }),
        []);
    const onUp = useCallback(index =>
        dispatch({ type: 'up', index }),
        []);
    const onDown = useCallback(index =>
        dispatch({ type: 'down', index }),
        []);
    const { fresh, archived, entries } = state;
    return <div>
               <section>
                   <h1>Ten Things</h1>
                   <EntryList
                       onEdit={onEdit}
                       onArchive={onArchive}
                       onDown={onDown}
                       onUp={onUp}
                       state={state}
                   >
                       {
                           fresh.map((id, index) =>
                               <EntryItem
                                   key={id}
                                   index={index}
                                   id={id}/>)
                       }
                   </EntryList>
               </section>
               <section>
                   <h2>Archived</h2>
                   <ul>
                       {
                           archived.map((id, index) =>
                               <li key={id}>{entries[id]}</li>)
                       }
                   </ul>
               </section>
           </div>;
};


export default TenPage;
