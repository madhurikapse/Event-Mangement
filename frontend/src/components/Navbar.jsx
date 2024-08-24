import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import toast from "react-hot-toast";

import "../styles/Navbar.css"
import Api from "../axiosconfig";

function Navbar(){

    const router = useNavigate();
    const { state, dispatch } = useContext(AuthContext);

    async function handleLogout() {
        try {
            const response = await Api.post("/auth/logout");
            if (response.data.success) {
                dispatch({ type: "LOGOUT" });
                router("/login");
                toast.success(response.data.message);
            } else {
                toast.error("Logout failed.");
            }
        } catch (error) {
            toast.error("Failed to logout.");
        }
    }
    
    return(
        <div className="parentdiv">
            <head>
                <title>PUMA.COM | Forever Faster</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                <link rel="icon" href="https://static.vecteezy.com/system/resources/thumbnails/010/994/248/small/puma-logo-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg" />
            </head>
        <div className="Navbar2">
                <div className="leftNavbar2">
                    <div id='leftnavbarimg'><img alt="icon" src="https://st3.depositphotos.com/32824554/34025/v/450/depositphotos_340258740-stock-illustration-list-icon-template-black-color.jpg"/></div>
                </div>
                <div className="rightNavbar2">
                    <div className="options">
                        <div onClick={()=>router("/")}>Home</div>
                        <div onClick={()=>router("/TicketBooking")}>TicketBooking</div>
                        {!state?.user && (<div onClick={()=>router("/register")}><span>Register</span></div>)}
                        <div onClick={()=>router("/CreateEvent")}>CreateEvent</div>
                        {state?.user && (<div onClick={()=>router("/all-tasks")}>All Tasks</div>)}
                        <div>{state?.user ? (<span onClick={handleLogout}>Logout</span>) : (<span onClick={()=>router("/login")}>Login</span>)}</div>

                    </div>
                </div>
            </div>
    </div>
    )
}

export default Navbar;