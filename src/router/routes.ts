import {RouteObject} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import {lazy} from "react";

const NotFound = lazy(() => import("@/pages/NotFoundPage"));
const SetupPage = lazy(() => import("@/pages/SetupPage"));
const DocsPage = lazy(() => import("@/pages/DocsPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

const MainLayoutRoutes: RouteObject[] = [
    {
        index: true,
        Component: HomePage,
    },
    {
        path: "about",
        Component: AboutPage,
    },
    {
        path: "setup",
        Component: SetupPage,
    },
    {
        path: "docs",
        Component: DocsPage,
    },
    {
        path: "usage",
        Component: NotFound,
    },
    {
        path: "contact",
        Component: ContactPage,
    },
]

const routes: RouteObject[] = [
    {
        path: "/",
        Component: MainLayout,
        children: MainLayoutRoutes,
    },
    {
        path: "*",
        Component: NotFound,
    },
]

export default routes;