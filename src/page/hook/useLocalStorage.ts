import {useState} from "react";

export const useLocalStorage = <TYPE> (name: string, defaultValue: TYPE) => {
    const [storeDefaultValue, setStoreDefaultValue] = useState<TYPE>(() => {
            const value = window.localStorage.getItem(name);
            try {
                if (value) {
                    return JSON.parse(value);
                } else {
                    window.localStorage.setItem(name, JSON.stringify(defaultValue));
                }
            } catch {
                return defaultValue;
            }
    });

    const setDefaultValue = (newValue: TYPE) => {
        try {
            window.localStorage.setItem(name, JSON.stringify(newValue));
        } finally {
            setStoreDefaultValue(newValue);
        }
    }

    return [storeDefaultValue, setDefaultValue];
};