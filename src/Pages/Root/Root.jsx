import { Outlet } from "react-router";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Root(){
    return(
        <div className="max-w-362 mx-auto bg-[#D2D2D2]">
            <div className="bg-white h-15">
                 <Navbar></Navbar>
            </div>
            
            <Outlet></Outlet>
          
            <Footer></Footer>

        </div>
    )
}