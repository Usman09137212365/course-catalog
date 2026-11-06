import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <section>
      <div className="hero">
        <p className="eyebrow">TechyJaunt Course Catalog</p>
        <h1>Learn at your own pace</h1>
        <p className="intro">
          Everything from HTML basics to React Router, structured and practical.
          Pick a course to see what it covers, or filter by level from the menu
          above.
        </p>
      </div>

      <div className="section-header">
        <h2>All Courses</h2>
        <span className="count">{courses.length} courses</span>
      </div>

      <div className="grid">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}