import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const course = courses.find((c) => c.slug === slug);

  // Go to the previous page; if this page was opened directly, go home instead
  const goBack = () => {
    if (location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  if (!course) {
    return (
      <section className="message-box">
        <p className="big-code">404</p>
        <h1>Course not found</h1>
        <p className="intro">
          There's no course at this URL. The link might be wrong, or the course
          may no longer exist.
        </p>
        <Link to="/" className="btn">
          ← Back to all courses
        </Link>
      </section>
    );
  }

  return (
    <article className="detail">
      <button className="btn btn-ghost" onClick={goBack}>
        ← Back
      </button>

      <span className={`badge badge-${course.category.toLowerCase()}`}>
        {course.category}
      </span>
      <h1>{course.title}</h1>
      <p className="duration">⏱ {course.duration}</p>

      <p className="description">{course.description}</p>

      <h2>Topics covered</h2>
      <ul className="topics">
        {course.topics.map((topic) => (
          <li key={topic}>
            <span className="check">✓</span>
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}