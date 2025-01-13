import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Booking from './pages/BookingDetails/Booking';
import BookingPopup from './pages/Popupmsg/BookingPopup'
import Payment from './pages/Payment/Payment';
import PaymentPopup from './pages/Popupmsg/PaymentPopup';
import AddProperty from './pages/AddProperty/AddProperty';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Admin from './Admin/Admin';
import BookingList from './pages/BookingDetails/BookingList/BookingList';
import EditBooking from './pages/BookingDetails/EditBooking';
import { ViewBooking } from './pages/BookingDetails/ViewBooking';
import { UserList } from './pages/Login/UserList';
import EditUser from './pages/Login/EditUser';
import ViewUser from './pages/Login/ViewUser';
import PaymentList from './pages/Payment/PaymentList';
import EditPayment from './pages/Payment/EditPayment';
import ViewPayment from './pages/Payment/ViewPayment';
import Residencies from './components/Residencies/Residencies';
import ShowProperty from './pages/ShowProperty/ShowProperty';

function App() {


  return (

    <div className="App">
      <div>
  
         <div className="white-gradient"/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/api/login" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='bookings/addbooking' element={<Booking/>}/>
            <Route path='/bookingpopup' element={<BookingPopup/>}/>
            <Route path='/payment/addpayment' element={<Payment/>}/>
            <Route path='/paymentpopup' element={<PaymentPopup/>}/>
            <Route path='/property/addproperty' element={<AddProperty/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/userdetails' element={<UserList/>}/>
            <Route path='/edituser/:id' element={<EditUser/>}/>
            <Route path='/viewuser/:id' element={<ViewUser/>}/>
            <Route path='/bookingdetails'  element={<BookingList/>}/>
            <Route path='/editbooking/:userId' element={<EditBooking/>}/>
            <Route path='/viewbooking/:userId' element={<ViewBooking/>}/>
            <Route path='/paymentdetails' element={<PaymentList/>}/>
            <Route path='/editpayment/:id' element={<EditPayment/>}/>
            <Route path='/viewpayment/:id' element={<ViewPayment/>}/>
            <Route path='/residency' element={<ShowProperty/>}/>
          </Routes>
       </div>

    </div>

  );
}

export default App;
