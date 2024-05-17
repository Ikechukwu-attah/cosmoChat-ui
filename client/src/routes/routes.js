import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import DashboardLayouts from "../pages/admin/layouts";
// import Dashboard from "../pages/admin/admin";
import BaseLayout from "../components/baseLayout/baseLayout";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/admin/admin"));
const Contact = lazy(() => import("../pages/admin/contacts"));
const Bar = lazy(() => import("../pages/admin/bar"));
const Calendar = lazy(() => import("../pages/admin/calendar"));
const Faq = lazy(() => import("../pages/admin/faq"));
const Form = lazy(() => import("../pages/admin/form"));
const Geography = lazy(() => import("../pages/admin/geography"));
const Invoices = lazy(() => import("../pages/admin/invoices"));
const Line = lazy(() => import("../pages/admin/line"));
const Pie = lazy(() => import("../pages/admin/pie"));
const Team = lazy(() => import("../pages/admin/team"));

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
            {" "}
            <Dashboard />
          </Suspense>
        ),
      },

      {
        path: "contact",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Contact />
          </Suspense>
        ),
      },

      {
        path: "bar",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Bar />
          </Suspense>
        ),
      },

      {
        path: "calendar",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Calendar />
          </Suspense>
        ),
      },

      {
        path: "faq",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Faq />
          </Suspense>
        ),
      },

      {
        path: "form",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Form />
          </Suspense>
        ),
      },

      {
        path: "geography",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Geography />
          </Suspense>
        ),
      },

      {
        path: "invoices",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Invoices />
          </Suspense>
        ),
      },

      {
        path: "line",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Line />
          </Suspense>
        ),
      },

      {
        path: "pie",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Pie />
          </Suspense>
        ),
      },

      {
        path: "team",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            {" "}
            <Team />
          </Suspense>
        ),
      },
    ],
  },
]);
