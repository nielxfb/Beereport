import { useNavigate } from "react-router-dom"
import Button from "../components/button"
import CourseIndex from "../components/course-index"
import { handleSubmitRoadmap } from "../controller/roadmap-controller"
import { courses } from "../template/courses"

function RoadmapPage() {
    const navigate = useNavigate();
  return (
    <div className="p-4">
        <h1 className="text-[#2e11f8]">Select your favorite subjects:</h1>
        <form onSubmit={(e) => handleSubmitRoadmap(e, navigate)}>
            <div className="grid grid-rows-9 grid-flow-col gap-4">
                {courses.map((course, index) => (
                    <div key={index}>
                        <CourseIndex name={course}  />
                    </div>
                ))}
                <div className="flex justify-end">
                    <Button text="Finish" isSubmit={true} style="w-[200px]" />
                </div>
            </div>
        </form>
    </div>
  )
}

export default RoadmapPage