import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  getAllStudentIntoDB,
  getSingleStudentIntoDB,
  softDeleteStudent,
  updateStudetIntoDB,
} from './student.service';
import httpStatus from 'http-status';
export const getAllStudent = catchAsync(async (req, res) => {
  const result = await getAllStudentIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student retrive successfully',

    data: result,
  });
});

export const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleStudentIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single student retrive successfully',
    data: result,
  });
});

export const updateStudent = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;

  const result = await updateStudetIntoDB(_id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student update successfully',
    data: result,
  });
});
export const deleteStudent = catchAsync(async (req, res) => {
  const { _id } = req.params;

  const result = await softDeleteStudent(_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted successfully',
    data: result,
  });
});
