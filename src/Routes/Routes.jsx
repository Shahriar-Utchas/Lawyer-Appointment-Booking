import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
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
            }
        ],
    },
]);
