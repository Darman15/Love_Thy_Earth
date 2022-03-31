import SignUp from "../SignUp/SignUp"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

import { Outlet } from "react-router-dom"

const ProtectedRoutes = (props) => {
    if(localStorage.getItem('loggedInUser')) {
        return (
            <Outlet/>
            )
    } else  {
        return (
           <SignUp/>
        )
    }
   
}

export default ProtectedRoutes;