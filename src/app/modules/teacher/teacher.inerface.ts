import { Types } from 'mongoose';

export type TTeacher = {
  user: Types.ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage?: string;
  address: string;
  isDeleted: boolean;
};
