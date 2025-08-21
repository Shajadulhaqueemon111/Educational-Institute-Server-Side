import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  getAllTeacherIntoDB,
  getSingleTeacherIntoDB,
  softDeleteTeacherIntoDB,
  updateTeacherIntoDB,
} from './teacher.service';
import httpStatus from 'http-status';
export const getAllTeacher = catchAsync(async (req, res) => {
  const result = await getAllTeacherIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'all teacher retrive successfully',
    data: result,
  });
});
export const getSingleTeacher = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleTeacherIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single teacher retrive successfully',
    data: result,
  });
});
export const updateTeacher = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  const result = await updateTeacherIntoDB(_id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' teacher data updated successfully',
    data: result,
  });
});
export const deleteTeacher = catchAsync(async (req, res) => {
  const { _id } = req.params;

  const result = await softDeleteTeacherIntoDB(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' teacher data deleted successfully',
    data: result,
  });
});
