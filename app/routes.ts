import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("common/page/home-page.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
    route("users", "routes/users.tsx"),
    route("company", "routes/company.tsx"),
] satisfies RouteConfig;
