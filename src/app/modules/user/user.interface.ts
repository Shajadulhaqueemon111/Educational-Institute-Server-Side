import { USER_ROLE } from './user.constant';

export interface IUser {
  name: string;
  profileImage: string;
  status?: 'active' | 'block';
  email: string;
  password: string;
  role: 'teachers' | 'parents' | 'student' | 'admin';
  isDeleted: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
