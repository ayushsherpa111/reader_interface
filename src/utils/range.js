export default function* range(...args) {
    let start = 0;
    let stop = args[0];
    let step = 1;
    if (args.length === 3) {
        [start, stop, step] = args;
    } else if (args.length === 2) {
        [start, stop] = args;
    }
    while ((start < stop && step >= 0) || (start > stop && step < 0)) {
        yield start;
        start = start + step;
    }
}
