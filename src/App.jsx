import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import ListUser from './Components/ListUser/ListUser.jsx'

function App() {


  return (
    <>
      <Nav />
      <ListUser />
    </>
  )
}

export default App
