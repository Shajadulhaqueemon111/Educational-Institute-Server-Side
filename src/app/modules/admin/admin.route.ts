import express from 'express';
import {
  deleteAdmin,
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
} from './admin.controller';

import { adminZodValidationSchema } from './admin.zodvalidation';
import validateRequest from '../../middleware/validationRequest';

const route = express.Router();

route.get('/', getAllAdmin);
route.get('/:id', getSingleAdmin);
route.patch(
  '/',
  validateRequest(adminZodValidationSchema.updateAdminValidationSchema),
  updateAdmin,
);
route.post('/', deleteAdmin);
