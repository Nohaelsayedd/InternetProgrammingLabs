export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.instructor}</p>
      <div className="meta">
        ⭐ {course.rating} • {course.students} students
      </div>
      <div className="price">{course.price}</div>
    </div>
  );
}
