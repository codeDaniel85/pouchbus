import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("common/page/home-page.tsx"),

    route("login-page", "common/page/login-page.tsx"),
    route("signup-page", "common/page/signup-page.tsx"),
    route("agree-page", "common/page/agree-page.tsx"),
    route("dashboard-page", "common/page/dashboard-page.tsx"),

    route("users-page", "features/sysadmin/pages/users-page.tsx"),
    route("companies-page", "features/sysadmin/pages/companies-page.tsx"),
    route("vehicles-page", "features/sysadmin/pages/vehicles-page.tsx"),
] satisfies RouteConfig;
