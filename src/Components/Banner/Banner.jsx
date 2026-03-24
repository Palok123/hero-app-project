import plastoreLogo  from '../../assets/Group.png'
import appsstoreLogo from '../../assets/appstore.png';
import bannerLogo from '../../assets/hero.png'
export default function Banner(){
    const goToGooglePlay = ()=>{
        window.open('https://play.google.com/store/games?hl=en',"_blank");
    }
    const goToAppsStore = ()=>{
        window.open('https://www.apple.com/app-store/','_blank');
    }
    return (
        <div className="mt-20">
            <div>
                <h2 className=" text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#001931]">We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps </h2>
                <p className="text-center text-[#627382] mt-4 max-w-[80%] sm:max-w-[60%] mx-auto">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="text-center mt-10">
                <button onClick={goToGooglePlay} className="text-xl font-semibold btn  bg-[#D2D2D2]  "><img src={plastoreLogo} className='w-6 h-6 mx-1' alt="playstore-logo" />Google Play</button>
                <button onClick={goToAppsStore} className="text-xl ml-5 font-semibold btn bg-[#D2D2D2]"><img src={appsstoreLogo} className='w-5 h-5 mx-1 ' alt="appstore-logo" />App Store</button>
            </div>
            <div className='mt-10'>
                <img src={bannerLogo} className='mx-auto w-80 sm:w-120 ' />
            </div>
            <div className='bg-[#632EE3] px-10 py-15 text-white'>
                <h2 className='text-3xl font-bold text-center'>Trusted by Millions, Built for You</h2>
               <div className='flex flex-col gap-8 sm:gap-15 mt-7 sm:flex-row justify-center items-center'>
                     <div className='text-center' >
                        <p className='mt-3 text-[14px]'>Total Downloads</p>
                        <p className='text-5xl font-extrabold my-3'>29.6M</p>
                        <p className='text-[14px]'>21% more than last month</p>
                     </div>
                     <div className='text-center' >
                        <p className='mt-3 text-[14px]'>Total Reviews</p>
                        <p className='text-5xl font-extrabold my-3'>906K</p>
                        <p className='text-[14px]'>46% more than last month</p>
                     </div>
                     <div className='text-center' >
                        <p className='mt-3 text-[14px]'>Active Apps</p>
                        <p className='text-5xl font-extrabold my-3'>132+</p>
                        <p className='text-[14px]'>31 more will Launch</p>
                     </div>
               </div>
            </div>
        </div>
    )
}