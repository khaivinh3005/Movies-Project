import { BrowserRouter,Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import {HomeTemplate} from "./templates/HomeTemplate/HomeTemplate"
import Home from './pages/Home/Home';
import './App.css'
import 'antd/dist/antd.css';
import Contact from './templates/HomeTemplate/Layout/Contact/Contact';
import News from './templates/HomeTemplate/Layout/News/News';
import Detail from './Detail/Detail';
import CheckOut from './pages/CheckOut/CheckOut';
import { LoginTemplate } from './templates/Login/Login';
import {lazy,Suspense} from 'react';
import Login from './pages/Login/Login';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Register from './templates/HomeTemplate/Layout/Register/Register';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Showtime from './pages/Admin/Showtime/Showtime';


export const history = createBrowserHistory();
const CheckoutTemplateLazy = lazy(() => import("./templates/CheckOutTemplate/CheckOutTemplate"));

function App() {
  return (  
    <Router history={history}>
        <Loading /> 
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/" exact Component={Home} />
        <UserTemplate path="/register" exact Component={Register} />
        <Suspense fallback={<div>Loading...</div>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={CheckOut} />
        <AdminTemplate path="/admin/user" exact  Component={Dashboard}/>
        <AdminTemplate path="/admin" exact  Component={Dashboard}/>
        <AdminTemplate path="/admin/films" exact Component={Films}/>
        <AdminTemplate path="/admin/showtime" exact Component={Showtime}/>
        </Suspense>
        <UserTemplate path="/login" exact Component={Login} />
    </Router>
  );
}

export default App;
