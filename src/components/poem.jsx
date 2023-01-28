import * as React from "react";
import { Children as C } from "react";
import Caesura from "./caesura.jsx";
import L from "./l.jsx";
import Lg from "./lg.jsx";
import Seg from "./seg.jsx";

const Line = ({ line }) =>
      C.map(line, (segment, segno) =>
          [
              segno > 0 && <Caesura />,
              <Seg>{segment}</Seg>
          ]);

const Stanza = ({ stanza }) =>
      C.map(stanza
            .map(line => <Line line={line} />),
            line => <L>{line}</L>);

// FIXME has to be a better method of keying
export const Poem = ({ poem }) =>
C.map(poem.map(stanza => <Stanza stanza={stanza} />),
      stanza => <Lg>{stanza}</Lg>);


export default Poem;
