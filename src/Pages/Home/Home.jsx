import { Suspense } from "react";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import AllApps from "../../Components/AllApps/AllApps";

export default function Home(){
    const appsData = useLoaderData();
    const data = appsData.filter((newData)=>newData.id<=8)
    
    return (<>
        <Banner></Banner>
        <h2 className="text-5xl font-bold text-center mt-8 mb-5">Trending Apps</h2>
        <p className="text-center my-8 text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        <div className="w-[94%] mx-auto">
                <Suspense fallback={<span >Loading....</span>}>
                    <AllApps data={data}></AllApps>
                </Suspense>
        </div>
        <div className="mt-7">
            <button  className="btn bg-[#632EE3] text-white ml-[48%]">Show All</button>
        </div>
    </>)
}