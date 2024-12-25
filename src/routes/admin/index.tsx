import { AUTH_ROUTES } from "./auth";
import { TEST_ROUTES } from "./test";

export const ADMIN_ROUTES = [...TEST_ROUTES, ...AUTH_ROUTES]