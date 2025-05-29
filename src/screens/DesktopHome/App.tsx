
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'

import Header from "../../components/Header"
import Purchase from '../../pages/Purchase'
export default function App() {
  return (
    <BrowserRouter>
    <div className="bg-[#070707]  w-screen">
    <Header />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path='/purchase' element={<Purchase />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}
