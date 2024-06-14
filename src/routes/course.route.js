import { Router } from "express"
import {getAllCourses , getLectureCourseId} from '../controllers/course.controller.js'
import { isLoggedIn } from "../middleware/auth.middleware.js"; 
const router = Router();


router.route('/').get(getAllCourses);

router.route('/:id').get(isLoggedIn,getLectureCourseId)


export default router;