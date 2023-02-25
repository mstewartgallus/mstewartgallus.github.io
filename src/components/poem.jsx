import { Children as C } from "react";
import Caesura from "./caesura.jsx";
import L from "./l.jsx";
import Lg from "./lg.jsx";
import Seg from "./seg.jsx";

const key = x => C.map(x, y => y);

const Line = ({ line }) =>
      key(line.map((segment, segno) =>
          <>
              {segno > 0 && <Caesura />}
              <Seg>{segment}</Seg>
          </>));

const Stanza = ({ stanza }) =>
      key(stanza.map(line =>
          <L>
              <Line line={line} />
          </L>));

// FIXME has to be a better method of keying
export const Poem = ({ poem }) =>
key(poem.map(stanza =>
    <Lg>
        <Stanza stanza={stanza} />
    </Lg>));


export default Poem;
