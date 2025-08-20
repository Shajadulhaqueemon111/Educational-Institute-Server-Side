import { z } from 'zod';

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(6, { message: 'Password is required' }),
    Student: z.object({
      name: z.string().min(1, { message: 'Name is required' }),
      email: z.string().email({ message: 'Invalid email format' }),
      phoneNumber: z.string().min(6, { message: 'Phone number is too short' }),
      profileImage: z.string().optional(),
      rollNumber: z.string().nonempty('roll number must be added'),
      address: z.string().min(1, { message: 'Address is required' }),
    }),
  }),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    Student: z.object({
      name: z.string().min(1, { message: 'Name is required' }).optional(),
      email: z.string().email({ message: 'Invalid email format' }).optional(),
      phoneNumber: z
        .string()
        .min(6, { message: 'Phone number is too short' })
        .optional(),
      profileImage: z.string().url().optional(),
      rollNumber: z.string().nonempty('roll number must be added').optional(),
      address: z.string().min(1, { message: 'Address is required' }).optional(),
    }),
  }),
});

export const StudentZodValidationSchema = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
