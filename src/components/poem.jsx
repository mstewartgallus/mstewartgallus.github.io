import * as React from "react";
import Caesura from "./caesura.jsx";
import L from "./l.jsx";
import Lg from "./lg.jsx";

// FIXME haz to be a better method of keying
export const Poem = ({ poem }) => {
    return poem.map(
        (stanza, stanzano) =>
        <Lg key={stanzano}>{
            stanza.map((line, lineno) =>
                <L key={`${stanzano}-${lineno}`}>{
                    line.map((segment, segno) =>
                        <React.Fragment key={`${stanzano}-${lineno}-${segno}`}>
                            {
                                segno > 0 && <Caesura />
                            }
                            {segment}
                        </React.Fragment>)
                }</L>)
        }</Lg>);
};

export default Poem;
