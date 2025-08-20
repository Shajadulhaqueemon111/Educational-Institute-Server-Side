import { Types } from 'mongoose';

export type TStudent = {
  user: Types.ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  rollNumber: string;
  profileImage?: string;
  address: string;
  isDeleted: boolean;
};
