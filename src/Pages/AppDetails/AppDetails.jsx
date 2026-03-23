import { useLoaderData, useParams } from "react-router"
import downloadLogo from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import Chart from "../../Components/BarCharts/Charts";
import { getStoredId, setIdToDb } from "../../Utility/LocalStorage";
import { useState } from "react";
import { useEffect } from "react";

export default function AppDetails(){
    const [ids ,setIds] = useState([]);
    
    const {id} = useParams();
    const Alldata = useLoaderData();
    const detailsApp = Alldata.find((app)=>app.id==id);
    const downloads = detailsApp.downloads.toString()[0];
    const data = detailsApp.ratings;
    const reviews = detailsApp.reviews.toString()[0] + '.' + detailsApp.reviews.toString()[1];
    
     useEffect(()=>{
        const storedIds = getStoredId();
        setIds(storedIds);
    },[])

    const handleInstall = ()=>{
        setIdToDb(id);
        setIds(getStoredId());
        
    }
    return (
        <div className="w-[94%] mx-auto mt-10">
             <div className="flex flex-col sm:flex-row gap-10 pb-10 border-b border-[#71717A]">
            <div className="w-80 h-80">
                <img src={detailsApp.image} className="w-full h-full" />
            </div>
            <div className="w-full">
                <h2 className="text-2xl sm:text-3xl font-semibold">{detailsApp.title} : {detailsApp.description}</h2>
                <p className="mt-2 pb-5 border-b border-b-[#71717A]"><span className="text-[#627382] text-[20px]">Developed by : </span> <span className="text-[#632EE3] text-[20px] font-semibold">{detailsApp.companyName}</span></p>
                <div className="flex justify-start items-start gap-12 mt-8">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <div ><img src={downloadLogo} className="h-8 w-8"/></div>
                        <p className="text-[#001931]">Downloads</p>
                        <p className="text-4xl font-bold">{downloads}M</p>
                    </div>
                    <div className="flex flex-col  items-center gap-1">
                        <div ><img src={ratingIcon} className="h-8 w-8"/></div>
                        <p className="text-[#001931]">Average Ratings</p>
                         <p className="text-4xl font-bold">{detailsApp.ratingAvg}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <div ><img src={reviewIcon} className="h-8 w-8"/></div>
                        <p className="text-[#001931]">Total Reviews</p>
                        <p className="text-4xl font-bold">{reviews}K</p>
                    </div>
                </div>
                <button onClick={handleInstall} className="mt-7 bg-[#00D390] text-white font-semibold px-3 py-1 rounded-sm">
                    {ids.includes(id)? "Installed" :`Install Now (${detailsApp.size} MB)`}

                </button>
            </div>
             </div>
             <div className="mt-10 pb-10 border-b border-[#71717A]">
                <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
                <Chart data={data}></Chart>
             </div>
             <div>
                <h2 className="text-2xl font-semibold mb-4 mt-5">Description</h2>
                <p className="text-[#627382]">
                    {detailsApp.fullDetails}
                </p>
             </div>
        </div>
    )
}