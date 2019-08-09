const log = console.log;

const steps = (lot) => {
    lot.map(one => setTimeout(one[1], one[0]))
}

export { log, steps };