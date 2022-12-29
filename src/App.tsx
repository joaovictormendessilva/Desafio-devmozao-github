import { Outlet } from 'react-router-dom';

import './global.css'
import { HomeSearch } from './pages/HomeSearch'

function App() {

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default App
