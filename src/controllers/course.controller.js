import Course from "../models/course.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const getAllCourses = async (req, res) => {
  try {
    const course = await Course.find({}).select("-lecture");

    res.status(200).json(
      new ApiResponse(200, {
        success: true,
        message: "All Courses",
        course,
      })
    );
  } catch (error) {
    throw new ApiError(400, error.message);
  }
};

const getLectureCourseId = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id);

    if (!course) {
      throw new ApiError(400, "Invalid course id or course not found !!");
    }

    res.status(200).json(
      new ApiResponse(200, {
        success: true,
        message: "Course lecutres fetched successfully",
        lectures: course.lectures,
      })
    );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

export { getAllCourses, getLectureCourseId };
