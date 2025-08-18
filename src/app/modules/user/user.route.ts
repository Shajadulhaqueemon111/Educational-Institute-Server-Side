import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middleware/validationRequest';
import { adminZodValidationSchema } from '../admin/admin.zodvalidation';

const route = express.Router();

route.post('/create-user', userController.createUser);
route.post(
  '/create-admin',
  validateRequest(adminZodValidationSchema.createAdminValidationSchema),
  userController.createAdmin,
);
route.get('/', userController.getAllUser);
route.get('/:id', userController.getSingleUser);
route.patch('/:id', userController.updateUser);
route.delete('/:id', userController.deleteUser);

export const userRouter = route;
