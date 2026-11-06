import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.slug}`} className="card">
      <span className={`badge badge-${course.category.toLowerCase()}`}>
        {course.category}
      </span>
      <h3>{course.title}</h3>
      <p className="meta">⏱ {course.duration}</p>
      <span className="card-cta">View course →</span>
    </Link>
  );
}