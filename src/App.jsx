import './App.css'
import { Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Authenticate from './pages/Authenticate'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Authenticate/>}/>
      <Route path='/register' element={<Authenticate register/>}/>
      <Route path='*' element={<PageNotFound/>}/> {/* * indicates a page that is outside the routing */}
     </Routes>
     <Footer/>
    </>
  )
}

export default App
