import { TStudent } from './student.interface';
import StudentModle from './student.modle';

export const getAllStudentIntoDB = async () => {
  const result = await StudentModle.find();

  return result;
};

export const getSingleStudentIntoDB = async (_id: string) => {
  const result = await StudentModle.findById(_id);

  return result;
};

export const updateStudetIntoDB = async (
  _id: string,
  payload: Partial<TStudent>,
) => {
  const result = await StudentModle.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
};

export const softDeleteStudent = async (_id: string) => {
  const result = await StudentModle.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};
