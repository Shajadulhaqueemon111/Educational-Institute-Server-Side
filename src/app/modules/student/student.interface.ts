import { Types } from 'mongoose';

export type TStuden = {
  user: Types.ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  rollNumber: string;
  profileImage?: string;
  address: string;
};
