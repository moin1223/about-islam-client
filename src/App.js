import './App.css';
import AddBlog from './components/Admin/AddBlog/AddBlog'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import DetailBlog from './components/Home/DetailBlog/DetailBlog';
import Manageblog from './components/Admin/Manageblog/Manageblog';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute'
import Header from './components/Home/Header/Header'
import Sidebar from './components/Admin/Sidebar/Sidebar';
export const UserContext = createContext();


function App() {
  const [blogs,setBlogs] = useState([])
  return (
    <UserContext.Provider value={[blogs,setBlogs]}>
   <Router>
   <Header/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       < PrivateRoute path="/addblog">
         <AddBlog/>
       </PrivateRoute>
       <Route path="/blogDetail/:id">
         <DetailBlog/>
       </Route>
       <PrivateRoute path="/manageBlog">
         <Manageblog/>
       </PrivateRoute>
       <PrivateRoute path="/sidebar">
         <Sidebar/>
       </PrivateRoute>
      
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
