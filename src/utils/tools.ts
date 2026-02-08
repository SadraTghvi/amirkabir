export function deepcopy<T>(value: T): T {
    return JSON.parse(JSON.stringify(value))
}

export const sleep = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms))
