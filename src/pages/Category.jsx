import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Category() {
  const { category } = useParams();

  // Case-insensitive, so /category/beginner works too
  const matches = courses.filter(
    (course) => course.category.toLowerCase() === category.toLowerCase()
  );

  // The heading comes from the URL (using the data's spelling when there is a match)
  const label = matches.length > 0 ? matches[0].category : category;

  return (
    <section>
      <div className="hero">
        <p className="eyebrow">Filtered view</p>
        <h1>{label} Courses</h1>
        <p className="intro">
          {matches.length} {matches.length === 1 ? "course" : "courses"} matched
        </p>
      </div>

      {matches.length === 0 ? (
        <p className="empty">No courses found in this category.</p>
      ) : (
        <div className="grid">
          {matches.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}