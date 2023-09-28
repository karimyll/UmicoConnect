import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { Toaster } from 'react-hot-toast'   // 
import { Outlet } from 'react-router-dom'    //
function MainLayout() {
  return (
    <div className="main">
        <Header />
        <Toaster />
        <Outlet />
        <Navbar />
    </div>
  )
}

export default MainLayout