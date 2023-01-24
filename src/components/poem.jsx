import * as React from "react";
import Caesura from "./caesura.jsx";
import L from "./l.jsx";
import Lg from "./lg.jsx";

// FIXME has to be a better method of keying
const Poem = ({ children }) =>
      children.map(
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

export default Poem;
