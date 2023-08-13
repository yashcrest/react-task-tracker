import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/footer'

function App() {
const title = 'Task tracker'
const [showAddTask, setShowAddTask] = useState(false);
const [tasks, setTasks] = useState([])

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks();
    setTasks(tasksFromServer)
  }
  getTasks()
},[])
 
//Fetch tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  console.log(data)
  return data
}

//Fetch tasks
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  console.log(data)
  return data
}

//Add Task
const addTask = async (task) => {
    const res = await fetch ('http://localhost:5000/tasks',{
      method: "POST",
      headers: {
        'Content-Type' : 'Application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
}

//Toggle Task
const toggleTask = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: "PUT",
    headers: {
      'Content-Type' : 'Application/JSON'
    },
    body: JSON.stringify(updatedTask)
  })

  const data = await res.json();
  
  setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: !data.reminder} : task
  ))
}

 //Delete Task 
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
  setTasks(tasks.filter(task => id !== task.id))
}

  return (
    <Router >
    <div className='container'>  
      <Header
       title={title} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
       />
        <Routes>
        <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleTask}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
    <Footer />
    </Router>
  )
}
export default App
