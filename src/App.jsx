import { Routes, Route } from 'react-router-dom'
import Valentine from './pages/Valentine'
import Success from './pages/Success'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Valentine />} />
      <Route path="/yes" element={<Success />} />
    </Routes>
  )
}
