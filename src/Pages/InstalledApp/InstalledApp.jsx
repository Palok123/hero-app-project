import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"
import { getStoredId } from "../../Utility/LocalStorage";
import SingleInstalledApps from "../../Components/SingleInstalledApps/SingleInstalledApps";

export default function InstalledApps(){
    const [sortType,setSortType] = useState('') ;
    const [installedApps,setInstalledApps] =  useState([]);
    const allApps = useLoaderData();
    useEffect(()=>{
                const storedAppsId = getStoredId();
                const installedAppsInfo = allApps.filter(apps => storedAppsId.includes(apps.id.toString()));
                setInstalledApps(installedAppsInfo)
    },[])
    
    const handleSortType = (type)=>{
        setSortType(type);
        if(type==='size')
        {
            const sortBySize = installedApps.sort((a,b)=>a.size - b.size);
            setInstalledApps(sortBySize);
            return;
        }
        if(type==='downloads'){
            const sortByDownloads = installedApps.sort((a,b)=>a.downloads - b.downloads);
            setInstalledApps(sortByDownloads);
            return;
        }
    }
    
    return (
        <div className="w-[94%] mx-auto">
            <div>
                <h2 className="text-center text-4xl  md:text-5xl font-bold mt-8">Your Installed Apps</h2>
                <p className="text-[#627382] text-center text-[20px] mt-4">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="mt-10 flex justify-between items-center">
                <h3 className="text-2xl font-semibold">1 Apps Found</h3>
                <div>
                    <details className="dropdown ">
                        <summary className="btn m-1 bg-[#dee0e2] text-[#627382] border border-[#627382]">sort by : {sortType} </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                 <li onClick={()=>handleSortType('size')}><a>Size</a></li>
                                 <li onClick={()=>handleSortType('downloads')}><a>Downloads</a></li>
                             </ul>
                    </details>
                </div>
            </div>
            <div className="mt-8">
                    {
                        installedApps.map(apps => <SingleInstalledApps key={apps.id} apps={apps}></SingleInstalledApps>)
                    }
            </div>
        </div>
    )
}