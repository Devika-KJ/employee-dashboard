import { useEffect, useState } from 'react'

function Home() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data)
      })
      .catch((error) => {
        console.error('Error fetching employees:', error)
      })
  }, [])

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Employee Dashboard</h1>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home