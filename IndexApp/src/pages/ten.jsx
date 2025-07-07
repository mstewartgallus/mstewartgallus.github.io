import { title, entry, itemset, items, item, skip } from "./ten.module.css";

const ids = ['foo', 'bar', 'gar', 'dar'];
const archived = ['foo', 'bar', 'gar', 'dar'];

// FIXME make accordion?
const TenPage = () =>
<div>
    <h1>Ten</h1>

    <ul>
        {
            ids.map(id =>
                <li key={id}>
                    <div className={entry}>
                        <details name="edit">
                            <summary id={id} className={title}>{id}</summary>
                            <form className={itemset} action="@">
                                <ul className={items}>
                                    <li className={item}>
                                        <fieldset>
                                            <span>
                                                <label>Edit
                                                    <input type="text" />
                                                </label>
                                            </span>
                                            <button>Submit</button>
                                        </fieldset>
                                    </li>
                                    <li className={item}>
                                        <fieldset>
                                            <button>Archive</button>
                                        </fieldset>
                                    </li>
                                </ul>
                            </form>
                        </details>
                    </div>
                </li>)
        }
    </ul>

    <h2>Archived</h2>
    <ul>
        {
            archived.map(entry =>
                <li key={entry}>{entry}</li>)
        }
    </ul>
</div>;


export default TenPage;
