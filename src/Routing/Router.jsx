import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Dashboard from '../Dashboard/Dashboard'
import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRout';

function Router() {
  return (
    <div>
         <BrowserRouter>
                <Routes>
                    <Route>
                    <Route path='/login' element={<AuthRoute><Login /></AuthRoute>} />
                        <Route path='/' element={<AuthRoute><SignUp /></AuthRoute> } />
                        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default Router