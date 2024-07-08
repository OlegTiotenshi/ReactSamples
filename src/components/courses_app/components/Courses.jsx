import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import courses from '../data/courses'
import queryString from 'query-string'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sorted = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sorted
  }
  sorted.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sorted
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <header className="app-header">
        <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      </header>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
