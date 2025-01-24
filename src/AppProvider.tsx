import {useRoutes} from "react-router-dom";
import {useEffect, useState} from "react";
import {reactRouter} from "./routes";

export const AppProvider = () => {
    const element = useRoutes(reactRouter);

    const [loading, setLoading] = useState(true)
    const asyncCall = () => new Promise<void>((resolve) => setTimeout(() => resolve(), 1500))
    useEffect(() => {
        // sentryInit()
        asyncCall()
            .then(() => setLoading(false))
            .catch(() => setLoading(false))

    }, []);

    if (loading) {
        return <>Loading...</>
    }

    return (element);
}