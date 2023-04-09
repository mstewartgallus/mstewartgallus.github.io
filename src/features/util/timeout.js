export const timeout = s => new Promise(r => setTimeout(r, s));

export const yieldSched = () => new Promise(r => setTimeout(r, 0));
export const yieldMicro = () => new Promise(r => queueMicrotask(r));

export const yieldAnimationFrame = () => new Promise(r => requestAnimationFrame(r));
