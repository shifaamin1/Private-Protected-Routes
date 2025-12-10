import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contextprovider from './context/Contextprowider';   // <-- VERY IMPORTANT

import Loginpage from './pages/Loginpage';
import Unauthorizedpage from './pages/Unauthorizedpage';
import ProtectedRoute from './context/ProtectedRoute';
import Adminpage from './pages/Adminpage';
import Userpage from './pages/Userpage';
import Guestpage from './pages/Guestpage';
import './App.css'


const App = () => (
  <Contextprovider>     
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/unauthorized" element={<Unauthorizedpage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={['admin']}>
              <Adminpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute roles={['admin', 'user']}>
              <Userpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/guest"
          element={
            <ProtectedRoute roles={['admin', 'user', 'guest']}>
              <Guestpage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </Contextprovider>
);

export default App;
