import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments />} />
          <Route path='myreviews' element={<MyReviews />} />
          <Route path='user' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
