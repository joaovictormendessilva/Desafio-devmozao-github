import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'
import { DevProfile } from './pages/DevProfile';
import { HomeSearch } from './pages/HomeSearch';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomeSearch />} />
          <Route path="/devprofile" element={<DevProfile />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
