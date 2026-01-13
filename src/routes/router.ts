import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
    {
        path: ROUTES.auth.login,
        async lazy () {
            const { LogIn }  = await import('../pages/auth');
            return { Component: LogIn };
        }
    }
])