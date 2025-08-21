import { model, Query, Schema } from 'mongoose';
import { TStudent } from './student.interface';

const StudentSchema = new Schema<TStudent>(
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
    rollNumber: {
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
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

StudentSchema.pre(/^find/, function (this: Query<any, any>, next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
const StudentModle = model<TStudent>('Student', StudentSchema);

export default StudentModle;
