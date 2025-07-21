interface Props {
    size: number;
}

// FIXME scale in between??
const fontSize = (size: number) => {
    if (size >= 512) {
        return 540;
    }

    if (size <= 192) {
        return 160;
    }

    if (size <= 32) {
        return 24;
    }

    return 16;
};

export const Logo = ({ size }: Props) =>
    <div
        style={{
            background: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',

            fontSize: fontSize(size),
            width: `${size}px`,
            height: `${size}px`
        }}
    >
           &amp;
    </div>;
