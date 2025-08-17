export interface IUser {
  name: string;
  profileImage: string;
  status?: 'active' | 'block';
  email: string;
  password: string;
  role: 'teachers' | 'Parent' | 'student' | 'admin';
  isDeleted: boolean;
}
