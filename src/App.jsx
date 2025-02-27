import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import ListUser from './Components/ListUser/ListUser.jsx'
import CreateUser from './Components/CreateUser/CreateUser.jsx'
import EditUser from './Components/EditUser/EditUser.jsx'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <h2>React CRUD operations using PHP API and MySQL</h2>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
