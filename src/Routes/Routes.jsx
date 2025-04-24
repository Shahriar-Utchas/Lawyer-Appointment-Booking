import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Bookings from "../Pages/Bookings/Bookings";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("../LawyerData.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
            },
            {
                path: "/lawyerDetails/:id",
                Component: LawyerDetails,
                loader: () => fetch("../LawyerData.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/Bookings",
                Component: Bookings,
                loader: () => fetch("../LawyerData.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
            }
        ],
    },
]);
