import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import AuthPage from './pages/AuthPage';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
