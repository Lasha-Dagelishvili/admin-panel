import AdminLayout from "@/layouts/admin-layout"
import { Routes, Route } from "react-router-dom"
import { TEST_ROUTES } from "./admin/test"
import { AUTH_ROUTES } from "./admin/auth"

const AppRoutes = () => {
    return (
        <Routes>
        <Route
            path="/*"
            element={
                <AdminLayout />
            }
            >
            {TEST_ROUTES}
        </Route>
            {AUTH_ROUTES}
    </Routes>
    )
}

export default AppRoutes