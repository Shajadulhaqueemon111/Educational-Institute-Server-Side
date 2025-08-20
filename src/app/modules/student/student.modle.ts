import { Schema } from 'mongoose';
import { TStuden } from './student.interface';

const StudentSchema = new Schema<TStuden>({
  name: {
    type: String,
    required: true,
  },
});
