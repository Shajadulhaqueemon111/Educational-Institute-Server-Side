import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';
import { TeacherRoute } from '../modules/teacher/teacher.route';
import { StudentRoute } from '../modules/student/student.route';

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
  {
    path: '/techer',
    route: TeacherRoute,
  },
  {
    path: '/student',
    route: StudentRoute,
  },
  {
    path: '/admin',
    route: TeacherRoute,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
