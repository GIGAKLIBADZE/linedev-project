import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: ROUTES.auth.login,
    async lazy() {
      const { LogIn } = await import("../pages/auth");
      return { Component: LogIn };
    },
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTES.app.root,
        async lazy() {
          const { Home } = await import("../pages/app");
          return { Component: Home };
        },
      },
    ],
  },
]);
