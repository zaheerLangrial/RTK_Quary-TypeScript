import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import AddStudent from './Components/AddStudent'


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/creat' element={<AddStudent/>} />
    </Routes> 
   </BrowserRouter>
  )
}

export default App
