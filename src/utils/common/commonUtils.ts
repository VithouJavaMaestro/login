export const isArrayNotEmpty = <TYPE>(arr: Array<TYPE>) => {
    return (arr && arr.length != 0);
}


export const isArrayEmpty = <TYPE>(arr: Array<TYPE>) => {
    return !isArrayNotEmpty(arr);
}

export const isArray = <TYPE>(type: TYPE) => {
    return Array.isArray(type);
}

export const getLocalStorage = (key: string) => {
    if (!key) {
        return undefined;
    }
    const value = window.localStorage.getItem(key);
    if (!value) {
        return undefined;
    }
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}

export type Any = any;