import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import DashboardLayouts from "../pages/admin/layouts";
// import Dashboard from "../pages/admin/admin";
import BaseLayout from "../components/baseLayout/baseLayout";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/admin/admin"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [{ index: true, element: <Home /> }],
  },

  {
    path: "admin",
    element: <DashboardLayouts />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
]);
