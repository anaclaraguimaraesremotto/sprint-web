
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import MinhasBikes from  './routes/MinhasBikes/index'

function App() {

  return (
    <body className='body'>
      <Header/>
      <Outlet/>
    </body>
  )
}

export default App
