import { model, Query, Schema } from 'mongoose';
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

techerSchema.pre(/^find/, function (this: Query<any, any>, next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
const TeacherModle = model<TTeacher>('Teacher', techerSchema);

export default TeacherModle;
