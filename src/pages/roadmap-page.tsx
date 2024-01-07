import Button from "../components/button.tsx";
import CourseIndex from "../components/course-index.tsx";
import { handleSubmitRoadmap } from "../controller/roadmap-controller.ts";
import { courses } from "../template/courses.ts";

function RoadmapPage() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-[#2e11f8]">Select your favorite subjects:</h1>
      <div className="grid grid-rows-9 grid-flow-col gap-4 p-1">
        <form onSubmit={(e) => handleSubmitRoadmap(e)}>
          {courses.map((course, index) => (
            <div key={index}>
              <CourseIndex name={course} />
            </div>
          ))}
          <div className="flex justify-end">
            <Button style="w-[100px]" text="Finish" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoadmapPage;
