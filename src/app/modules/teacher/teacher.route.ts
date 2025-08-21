import express from 'express';
import {
  deleteTeacher,
  getAllTeacher,
  getSingleTeacher,
  updateTeacher,
} from './teacher.controller';
import validateRequest from '../../middleware/validationRequest';
import { StudentZodValidationSchema } from '../student/student.zodvalidation';
import authValidateRequest from '../../middleware/authValidation';
import { USER_ROLE } from '../user/user.constant';

const route = express.Router();
route.get(
  '/',
  authValidateRequest(USER_ROLE.teacher, USER_ROLE.admin),
  getAllTeacher,
);
route.get(
  '/:id',
  authValidateRequest(USER_ROLE.teacher, USER_ROLE.admin),
  getSingleTeacher,
);
route.patch(
  '/:_id',
  validateRequest(StudentZodValidationSchema.updateStudentValidationSchema),

  authValidateRequest(USER_ROLE.teacher, USER_ROLE.admin),
  updateTeacher,
);
route.delete(
  '/:_id',
  authValidateRequest(USER_ROLE.teacher, USER_ROLE.admin),
  deleteTeacher,
);

export const TeacherRoute = route;
