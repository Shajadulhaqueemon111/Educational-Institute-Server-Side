import { model, Schema } from 'mongoose';
import { TStuden } from './student.interface';

const StudentSchema = new Schema<TStuden>({
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
  },
  address: {
    type: String,
    required: true,
  },
});

const StudentModle = model<TStuden>('Student', StudentSchema);

export default StudentModle;
