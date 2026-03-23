import { IoIosSearch } from "react-icons/io";
import { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import AllApps from "../../Components/AllApps/AllApps";
import AppsNotFound from "../AppsNotFound/AppsNotFound";
export default function AllApplication(){
    const allData = useLoaderData();
    const [data ,setData] = useState(allData)
  
    const handleOnChange = (e)=>{
        const data2 = allData.filter(apps=>apps.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setData(data2)
       
        
    }
    return (
        <div className="w-[94%] mx-auto">
             <div className="text-center mt-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ">Our All Applications</h2>
                <p className="text-[#627382] mt-3 mb-4">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between items-center my-8">
                <p className="font-semibold text-2xl">({data.length}) Apps Found</p>
                <input type="text" onChange={handleOnChange} placeholder='🔍  Search Apps' className="py-1 px-1 border border-gray-400 rounded-md  max-w-100 min-w-50" />
            </div>
            <div>
                <Suspense fallback={<span >Loading....</span>}>
                    {data.length=== 0 ? <AppsNotFound></AppsNotFound> :<AllApps data={data}></AllApps>}
                 </Suspense>
            </div>
        </div>

    )
}