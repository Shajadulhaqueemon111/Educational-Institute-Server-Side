import { TTeacher } from './teacher.inerface';
import TeacherModle from './teacher.modle';

export const getAllTeacherIntoDB = async () => {
  const result = await TeacherModle.find();

  return result;
};

export const getSingleTeacherIntoDB = async (_id: string) => {
  const result = await TeacherModle.findById(_id);

  return result;
};

export const updateTeacherIntoDB = async (
  _id: string,
  payload: Partial<TTeacher>,
) => {
  const result = await TeacherModle.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const softDeleteTeacherIntoDB = async (_id: string) => {
  const result = await TeacherModle.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true },
  );
};
