import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { ADMIN_PATHS } from "../index.enum";



const UsersListView = lazy(
    () => import("@/pages/test/admin-pages/users/views/list"),
);
const UsersCreateView = lazy(
    () => import("@/pages/test/admin-pages/users/views/create"),
);
const UsersUpdateView = lazy(
    () => import("@/pages/test/admin-pages/users/views/update"),
);

export const TEST_ROUTES = [
    <>
        <Route 
            path={ADMIN_PATHS.TEST_LIST} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <UsersListView />
                </Suspense>
                }
        />
        <Route 
            path={ADMIN_PATHS.TEST_CREATE} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <UsersCreateView />
                </Suspense>
                } 
        />
        <Route 
            path={ADMIN_PATHS.TEST_UPDATE + "/:id"} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <UsersUpdateView />
                </Suspense>
                } 
        />
    </>
]