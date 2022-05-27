import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {Fjelltop} from "./pages/fjelltop";

function App() {

  const queryClient = new QueryClient();
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fjell" element={<Fjelltop />} />
      </Routes>
    </QueryClientProvider>
    </div>
  )
}

export default App
