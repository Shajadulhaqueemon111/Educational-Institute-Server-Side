import { model, Schema } from 'mongoose';
import { TTeacher } from './teacher.inerface';

const techerSchema = new Schema<TTeacher>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TeacherModle = model<TTeacher>('Teacher', techerSchema);

export default TeacherModle;
