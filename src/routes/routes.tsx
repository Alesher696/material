import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "@/pages/layout/Layout.tsx";
import { MailPage } from "@/pages/mail/MailPage.tsx";
import { LoginPage } from "@/pages/login/LoginPage.tsx";
import { HomePage } from "@/pages/home/HomePage.tsx";
import { MusicPage } from "@/pages/music/MusicPage.tsx";

function CustomPrivateRoutes() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <CustomPrivateRoutes />,
        path: "",
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/music",
            element: <MusicPage />,
          },
          {
            path: "/mail",
            element: <MailPage />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export const CustomRouter = () => {
  return <RouterProvider router={customRouter} />;
};
