"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = (0, express_1.Router)();
const moduleRouter = [
    {
        path: '/user',
        route: user_route_1.userRouter,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoute,
    },
];
moduleRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
