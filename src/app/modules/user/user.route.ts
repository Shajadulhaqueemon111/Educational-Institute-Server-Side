import express from 'express';
import { userController } from './user.controller';

const route = express.Router();

route.post('/create-user', userController.createUser);
route.get('/', userController.getAllUser);
route.get('/:id', userController.getSingleUser);
route.patch('/:id', userController.updateUser);
route.delete('/:id', userController.deleteUser);

export const userRouter = route;
