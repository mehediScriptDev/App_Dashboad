import { createBrowserRouter } from "react-router";
import Login from "../pages/login/Login ";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import ProtectedRoute from "../private/ProtectedRoute";

// Import page components
const Users = () => import("../pages/users/Users");
const Content = () => import("../pages/Content/Content");
const Questions = () => import("../pages/questions/Questions");
const Analytics = () => import("../pages/analytics/Analytics");
const Subscriptions = () => import("../pages/Subscriptions/Subscriptions");
const Notifications = () => import("../pages/notifications/Notifications");

// Define all routes here
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "users",
                element: <div className="p-6"><h1 className="text-2xl font-bold">Users</h1><p className="text-gray-600 mt-2">User management coming soon...</p></div>,
            },
            {
                path: "content",
                element: <div className="p-6"><h1 className="text-2xl font-bold">Content</h1><p className="text-gray-600 mt-2">Content management coming soon...</p></div>,
            },
            {
                path: "questions",
                element: <div className="p-6"><h1 className="text-2xl font-bold">Questions</h1><p className="text-gray-600 mt-2">Questions management coming soon...</p></div>,
            },
            {
                path: "analytics",
                element: <div className="p-6"><h1 className="text-2xl font-bold">Analytics</h1><p className="text-gray-600 mt-2">Analytics dashboard coming soon...</p></div>,
            },
            {
                path: "subscriptions",
                element: <div className="p-6"><h1 className="text-2xl font-bold">Subscriptions</h1><p className="text-gray-600 mt-2">Subscriptions management coming soon...</p></div>,
            },
            {
                path: "notifications",
                element: <div className="p-6"><h1 className="text-2xl font-bold">Notifications</h1><p className="text-gray-600 mt-2">Notifications management coming soon...</p></div>,
            },
        ],
    },
]);

export default router;
