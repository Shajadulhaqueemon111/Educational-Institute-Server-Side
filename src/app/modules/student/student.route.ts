import express from 'express';
import {
  deleteStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
} from './student.controller';
import validateRequest from '../../middleware/validationRequest';
import { StudentZodValidationSchema } from './student.zodvalidation';
import authValidateRequest from '../../middleware/authValidation';
import { USER_ROLE } from '../user/user.constant';

const route = express.Router();

route.get('/', getAllStudent);
route.get('/:id', getSingleStudent);
route.patch(
  '/:_id',
  authValidateRequest(USER_ROLE.student),
  validateRequest(StudentZodValidationSchema.createStudentValidationSchema),
  updateStudent,
);
route.delete('/:_id', authValidateRequest(USER_ROLE.student), deleteStudent);
