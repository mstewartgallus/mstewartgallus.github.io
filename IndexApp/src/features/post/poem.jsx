import { Body, Caesura, L, Lg, Seg } from "@features/poem";

const Line = ({ line }) =>
      line.map((segment, segno) =>
          <>
              {segno > 0 && <Caesura />}
              <Seg>{segment}</Seg>
          </>);

const Stanza = ({ stanza }) =>
      stanza.map((line, ix) =>
          <L index={ix}>
              <Line line={line} />
          </L>);

// FIXME has to be a better method of keying
export const Poem = ({ poem }) =>
<Body>
    {
        poem.map(stanza =>
            <Lg count={stanza.length}>
                <Stanza stanza={stanza} />
            </Lg>)
    }
</Body>;
