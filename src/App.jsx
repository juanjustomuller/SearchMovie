import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'


function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


//https://www.omdbapi.com/?apikey=76094e6b&s=troya

//https://www.omdbapi.com/?apikey=76094e6b&i=tt0337341