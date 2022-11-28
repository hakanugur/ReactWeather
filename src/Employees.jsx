import {useState} from 'react'

const Employees = () => {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: 'Hakan Ugur',
            position: 'Frontend-Developer',
            sallary: '2000',
            gender: 'male'
        },
        {
            id: 2,
            fullName: 'Aslı Gündüz',
            position: 'Backend-Developer',
            sallary: '1000',
            gender: 'female'
        }
    ])

  return (
    <main>
        {
            employees.map((employee) => (
                <div id={employee.id}>
                    <p>{employee.fullName} {employee.position} {(employee.gender === "male") ? "erkek" : "kadın"}</p>
                </div>
            ))
        }
    </main>
  )
}

export default Employees;
