// FIXME generate random id?
let counter = 0;
function newid() {
    const old = counter;
    counter = old + 1;
    return 'tooltip-' + old;
}

function create(tag) {
    const dateTime = tag.dateTime;
    const id = newid();

    const time = document.createElement('time');
    time.setAttribute('datetime', dateTime);
    time.innerText = `Posted\u2003${dateTime}`;

    const tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tooltip sr-only');
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('tabindex', -1);
    tooltip.setAttribute('id', id);
    tooltip.append(time);

    tag.append(tooltip);
    // FIXME avoid clashing with existing descriptions?
    tag.setAttribute('aria-describedby', id);
    // FIXME not sure here
    tag.setAttribute('aria-controls', id);

    tooltip.addEventListener('keyup', event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        if (event.keyCode === 27) {
            exit(tag);
        }
    });

    return tooltip;
}


function enter(tag) {
    const dateTime = tag.dateTime;
    if (!dateTime) {
        return;
    }

    let tooltip = tag.querySelector('.tooltip');
    if (!tooltip) {
        tooltip = create(tag);
    }
    tooltip.classList.remove('sr-only');
    tooltip.focus();
}

function exit(tag) {
    let tooltip = tag.querySelector('.tooltip');
    if (!tooltip) {
        return;
    }
    tooltip.classList.add('sr-only');
}


for (const tag of document.getElementsByTagName('ins')) {
    create(tag);
    tag.addEventListener('mouseenter', e => enter(e.target));
    tag.addEventListener('mouseleave', e => exit(e.target));
}
