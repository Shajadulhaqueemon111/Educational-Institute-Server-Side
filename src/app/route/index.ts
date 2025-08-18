import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';

const router = Router();
const moduleRouter = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
