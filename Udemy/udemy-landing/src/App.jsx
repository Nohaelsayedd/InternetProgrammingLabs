import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import CoursesGrid from "./components/Courses/CoursesGrid"
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies"
import data from "./data/dummyData"

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero hero={data.hero} />
        <CoursesGrid courses={data.featuredCourses} />
        <TrustedCompanies list={data.trustedCompanies} />
      </main>
    </>
  )
}
