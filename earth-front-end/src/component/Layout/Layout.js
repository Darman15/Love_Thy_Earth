import SignUp from "../SignUp/SignUp";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import ThankYou from "../ThankYou/ThankYou";
import Home from "../Home/Home";
import Trade from "../Trade/Trade";
import ProtectedRoutes from "./ProtectedRoutes";
import AllUsers from "../Home/AllUsers";
import Maps from "../Maps/Maps";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />}>
            <Route path="all-users" element={<AllUsers />} />
          </Route>
          <Route path="/map" element={<Maps />} />
          <Route path="/trade" element={<Trade />} />
        </Route>

        <Route path="/" element={<SignUp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};
export default Layout;
