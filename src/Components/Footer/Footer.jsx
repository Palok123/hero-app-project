import logo from '../../assets/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
export default function Footer(){
    return (
        <footer className="px-[5%] py-8 bg-black mt-10">

            <div className='flex justify-between items-start border-b border-[#001931] '>
               <div className='flex gap-1 items-center'>
                     <div className='h-10 w-10'>
                         <img src={logo} className='h-full w-full'  />
                     </div>
                    <h2 className='text-white font-bold'>HERO.IO</h2>
               </div>
               <div className='text-white mb-5'>
                    <p>Social Links</p>
                    <div className='flex gap-2 mt-2'>
                        <FaXTwitter className='text-black text-[20px] p-1 rounded-full bg-white'/>
                        <FaLinkedinIn className='text-black text-[20px] p-1 rounded-full bg-white' />
                        <FaFacebookF className='text-black text-[20px] p-1 rounded-full bg-white' />
                    </div>
               </div>
            </div>   
        </footer>
    )
}