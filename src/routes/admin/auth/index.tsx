import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { ADMIN_PATHS } from "../index.enum";



const SignInPage = lazy(
    () => import("@/pages/signIn/signIn-page"),
);
const SignUpPage = lazy(
    () => import("@/pages/signUp/signUp-page"),
);


export const AUTH_ROUTES = [
    <>
        <Route 
            path={ADMIN_PATHS.AUTH_SignIn} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SignInPage />
                </Suspense>
                }
        />
        <Route 
            path={ADMIN_PATHS.AUTH_SignUp} 
            element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SignUpPage />
                </Suspense>
                }
        />
    </>
]