import CourseCard from "./CourseCard"

export default function CoursesGrid({ courses }) {
  return (
    <section className="courses-section">
      <h2>Featured Courses</h2>

      <div className="courses-grid">
        {courses.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}
